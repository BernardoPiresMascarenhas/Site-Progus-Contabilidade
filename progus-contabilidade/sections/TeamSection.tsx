"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { team } from "@/data/team";

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-28 lg:py-32"
    >
      {/* Atmosfera de fundo escuro */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.05] [filter:invert(1)]" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-azure-500/15 blur-[120px]" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-azure-700/15 blur-[120px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Gente de verdade cuidando do seu negócio"
          description="Conheça parte do time que está, todos os dias, ao lado da sua empresa."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-7 text-center shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-azure-400/40 hover:bg-white/[0.08] hover:shadow-card-hover"
            >
              {/* Avatar placeholder elegante (iniciais) */}
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-azure-500 font-display text-3xl font-bold text-white shadow-card transition-transform duration-300 group-hover:scale-105">
                  {member.initials}
                </div>
                <span className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full border-4 border-navy-900 bg-emerald-400" />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-azure-300">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                {member.bio}
              </p>

              <div className="mt-5 flex gap-2">
                <button
                  aria-label={`LinkedIn de ${member.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-navy-200 transition hover:border-azure-400/40 hover:bg-white/10 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  aria-label={`E-mail de ${member.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-navy-200 transition hover:border-azure-400/40 hover:bg-white/10 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
