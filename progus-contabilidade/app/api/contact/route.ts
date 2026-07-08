import { NextResponse } from "next/server";

/**
 * Route Handler de exemplo para o formulário de contato.
 *
 * Hoje ele apenas valida e loga os dados. Para enviar de verdade, escolha UMA
 * das opções abaixo e descomente/implemente:
 *
 * 1) E-mail via Resend (recomendado):
 *    - npm i resend
 *    - crie RESEND_API_KEY no .env.local
 *    - import { Resend } from "resend";
 *      const resend = new Resend(process.env.RESEND_API_KEY);
 *      await resend.emails.send({
 *        from: "site@seudominio.com.br",
 *        to: "contato@proguscontabilidade.com.br",
 *        subject: `Nova solicitação de ${data.name}`,
 *        text: JSON.stringify(data, null, 2),
 *      });
 *
 * 2) Nodemailer (SMTP próprio): npm i nodemailer
 *
 * 3) Webhook / CRM: faça um fetch para a URL do seu CRM.
 */

interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  companyType: string;
  message: string;
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

    // TODO: substituir pelo envio real (ver comentário acima).
    console.log("Nova solicitação de contato:", data);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar a solicitação." },
      { status: 500 }
    );
  }
}
