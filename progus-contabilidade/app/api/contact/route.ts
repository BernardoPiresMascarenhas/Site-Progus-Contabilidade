import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Route Handler do formulário de contato.
 *
 * Envia o e-mail via Resend. Variáveis necessárias em `.env.local`:
 *
 *   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
 *   CONTACT_TO_EMAIL=progus@proguscontabilidade.com.br
 *   CONTACT_FROM_EMAIL=Site Progus <site@proguscontabilidade.com.br>
 *
 * O remetente precisa usar um domínio verificado no painel do Resend. Enquanto
 * o domínio não estiver verificado, dá para testar com "onboarding@resend.dev"
 * (nesse caso o envio só chega no e-mail dono da conta Resend).
 */

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  companyType: string;
  message: string;
}

const FROM_FALLBACK = "Site Progus <onboarding@resend.dev>";

/** Escapa HTML para o conteúdo do usuário não quebrar (nem injetar) o e-mail. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;color:#4E78AE;font-size:13px;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;color:#0E2138;font-size:14px;">${escapeHtml(value)}</td>
    </tr>`;
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    // Validação mínima no servidor (nunca confie só no front).
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!emailOk) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      console.error(
        "[contato] RESEND_API_KEY e/ou CONTACT_TO_EMAIL não configurados em .env.local"
      );
      return NextResponse.json(
        { error: "Envio de e-mail não configurado no servidor." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#EEF3F9;padding:24px;">
        <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;padding:28px;">
          <h1 style="margin:0 0 4px;font-size:18px;color:#0E2138;">Nova solicitação de contato</h1>
          <p style="margin:0 0 20px;font-size:13px;color:#4E78AE;">Enviada pelo formulário do site da Progus Contabilidade.</p>
          <table style="width:100%;border-collapse:collapse;border-top:1px solid #D6E2F0;">
            ${row("Nome", data.name)}
            ${row("Empresa", data.company || "—")}
            ${row("E-mail", data.email)}
            ${row("Telefone", data.phone)}
            ${row("Tipo de empresa", data.companyType || "—")}
            ${row("Mensagem", data.message)}
          </table>
        </div>
      </div>`;

    const text = [
      "Nova solicitação de contato (site Progus)",
      `Nome: ${data.name}`,
      `Empresa: ${data.company || "—"}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone}`,
      `Tipo de empresa: ${data.companyType || "—"}`,
      "",
      "Mensagem:",
      data.message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || FROM_FALLBACK,
      to,
      // Responder no cliente de e-mail responde direto para quem preencheu.
      replyTo: data.email,
      subject: `Nova solicitação de ${data.name}`,
      html,
      text,
    });

    if (error) {
      console.error("[contato] Falha no envio via Resend:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar a mensagem agora." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contato] Erro inesperado:", err);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação." },
      { status: 500 }
    );
  }
}
