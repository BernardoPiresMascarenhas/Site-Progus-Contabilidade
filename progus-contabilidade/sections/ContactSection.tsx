"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/motion";
import {
  cn,
  isValidEmail,
  isValidPhone,
  maskPhone,
} from "@/lib/utils";
import type { ContactFormData, FormStatus } from "@/types";

const companyTypes = [
  "MEI",
  "Simples Nacional",
  "Lucro Presumido",
  "Lucro Real",
  "Ainda não tenho empresa",
];

const initialForm: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  companyType: "",
  message: "",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "R. Belo Oriente, 120 — Providência, Belo Horizonte / MG",
  },
  { icon: Phone, label: "Telefone", value: "(31) 3000-0000" },
  { icon: Mail, label: "E-mail", value: "contato@proguscontabilidade.com.br" },
  { icon: Clock, label: "Atendimento", value: "Seg a Sex, 8h às 18h" },
];

export function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof ContactFormData, string>> = {};
    if (form.name.trim().length < 2) next.name = "Informe seu nome.";
    if (!isValidEmail(form.email)) next.email = "E-mail inválido.";
    if (!isValidPhone(form.phone)) next.phone = "Telefone inválido.";
    if (!form.companyType) next.companyType = "Selecione o tipo de empresa.";
    if (form.message.trim().length < 10)
      next.message = "Conte um pouco mais (mín. 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("submitting");

    try {
      // ───────────────────────────────────────────────────────────────
      // PONTO DE INTEGRAÇÃO COM O BACKEND
      // Troque o bloco simulado abaixo por uma chamada real, por exemplo:
      //
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Falha no envio");
      //
      // (Há um exemplo de Route Handler pronto em app/api/contact/route.ts)
      // ───────────────────────────────────────────────────────────────
      await new Promise((resolve) => setTimeout(resolve, 1400));

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Fale com a gente"
          title="Vamos cuidar da sua empresa juntos"
          description="Preencha o formulário e nossa equipe entra em contato com uma proposta sob medida para o seu perfil."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* COLUNA ESQUERDA — Formulário */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    Recebemos a sua mensagem!
                  </h3>
                  <p className="mt-2 max-w-sm text-navy-500">
                    Em breve nossa equipe entra em contato. Obrigado pela
                    confiança.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-azure-600 hover:text-azure-700"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Nome"
                      required
                      value={form.name}
                      onChange={(v) => update("name", v)}
                      error={errors.name}
                      placeholder="Seu nome completo"
                    />
                    <Field
                      label="Empresa"
                      value={form.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Nome da empresa (opcional)"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="E-mail"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => update("email", v)}
                      error={errors.email}
                      placeholder="voce@email.com"
                    />
                    <Field
                      label="Telefone"
                      required
                      value={form.phone}
                      onChange={(v) => update("phone", maskPhone(v))}
                      error={errors.phone}
                      placeholder="(31) 90000-0000"
                    />
                  </div>

                  <SelectField
                    label="Tipo de empresa"
                    required
                    value={form.companyType}
                    onChange={(v) => update("companyType", v)}
                    error={errors.companyType}
                    options={companyTypes}
                  />

                  <TextareaField
                    label="Mensagem"
                    required
                    value={form.message}
                    onChange={(v) => update("message", v)}
                    error={errors.message}
                    placeholder="Conte como podemos ajudar a sua empresa..."
                  />

                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      Algo deu errado. Tente novamente em instantes.
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === "submitting"}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-azure-600 px-7 py-3.5 text-base font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-azure-700 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-azure-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar contato
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* COLUNA DIREITA — Informações + Mapa */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white shadow-card">
              <h3 className="font-display text-lg font-semibold">
                Informações de contato
              </h3>
              <ul className="mt-5 flex flex-col gap-5">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10 text-azure-300">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-navy-200">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white">
                        {info.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mapa */}
            <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-card">
              <iframe
                title="Localização da Progus Contabilidade"
                src="https://www.google.com/maps?q=R.+Belo+Oriente,+120+-+Providência,+Belo+Horizonte+-+MG,+31814-100&output=embed"
                className="h-64 w-full lg:h-full lg:min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────────────────── Campos do formulário ───────────────────────── */

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 transition-all duration-200 focus:outline-none focus:ring-4";

function fieldClasses(hasError?: string) {
  return cn(
    fieldBase,
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-navy-200 focus:border-azure-400 focus:ring-azure-100"
  );
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-navy-700">
      {children}
      {required && <span className="ml-0.5 text-azure-600">*</span>}
    </label>
  );
}

function ErrorText({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
      <AlertCircle className="h-3 w-3" />
      {msg}
    </p>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
}: FieldProps) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={fieldClasses(error)}
      />
      <ErrorText msg={error} />
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
}: FieldProps) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className={cn(fieldClasses(error), "resize-none")}
      />
      <ErrorText msg={error} />
    </div>
  );
}

interface SelectProps extends Omit<FieldProps, "placeholder" | "type"> {
  options: string[];
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: SelectProps) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(fieldClasses(error), "cursor-pointer appearance-none bg-[length:1.25rem] bg-[right_0.9rem_center] bg-no-repeat pr-10", !value && "text-navy-300")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%234E78AE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-navy-900">
            {opt}
          </option>
        ))}
      </select>
      <ErrorText msg={error} />
    </div>
  );
}
