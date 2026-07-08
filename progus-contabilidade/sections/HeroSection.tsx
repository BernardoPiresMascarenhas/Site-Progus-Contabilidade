"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PORTAL_URL, CONTACT_ANCHOR } from "@/data/navigation";

const quickMetrics = [
  { value: "35+", label: "anos de mercado" },
  { value: "1.200+", label: "empresas atendidas" },
  { value: "98%", label: "de satisfação" },
];

const badges = [
  { icon: ShieldCheck, label: "CRC ativo" },
  { icon: Clock, label: "Obrigações em dia" },
  { icon: Star, label: "Atendimento humano" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44"
    >
      {/* Fundo escuro: gradiente + grade sutil + glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900" />
        <div className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.05] [filter:invert(1)] [mask-image:radial-gradient(70%_60%_at_50%_0%,#000_0%,transparent_75%)]" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-azure-500/20 blur-[120px] animate-float-slow" />
        <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-azure-700/25 blur-[120px]" />
      </div>

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-azure-200 shadow-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-400" />
            </span>
            Contabilidade que cuida do seu negócio como se fosse o nosso
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Tradição e proximidade para a sua empresa{" "}
            <span className="bg-gradient-to-r from-azure-300 via-azure-200 to-white bg-clip-text text-transparent">
              crescer com segurança
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-navy-200 sm:text-xl"
          >
            Somos uma contabilidade familiar com mais de duas décadas de história.
            Unimos a confiança de quem entende do seu negócio à tecnologia que
            simplifica o dia a dia.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button
              as="a"
              href={CONTACT_ANCHOR}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Quero ser cliente
              <ArrowRight className="h-4.5 w-4.5" />
            </Button>
            <Button
              as="a"
              href={PORTAL_URL}
              external
              variant="secondary"
              size="lg"
              className="w-full !border-white/25 !bg-white/[0.06] !text-white backdrop-blur-sm hover:!border-white/45 hover:!bg-white/[0.12] hover:!text-white sm:w-auto"
            >
              Já sou cliente
            </Button>
          </motion.div>

          {/* Selos de confiança discretos */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-200"
              >
                <badge.icon className="h-4 w-4 text-azure-300" />
                {badge.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Métricas rápidas — cards glass */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/5 shadow-card backdrop-blur-sm"
        >
          {quickMetrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="flex flex-col items-center px-3 py-6 sm:px-8"
            >
              <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                {m.value}
              </span>
              <span className="mt-1 text-center text-xs text-navy-200 sm:text-sm">
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
