"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-28 lg:py-32"
    >
      {/* Atmosfera de fundo escuro */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.05] [filter:invert(1)]" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-azure-500/15 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-azure-700/15 blur-[120px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Nossas soluções"
          title="Nosso negócio é encontrar soluções"
          description="Da abertura ao crescimento, cuidamos de toda a vida contábil da sua empresa com a atenção que ela merece."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-azure-400/40 hover:bg-white/[0.08] hover:shadow-card-hover"
            >
              {/* Glow no hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-azure-400/0 blur-2xl transition-all duration-500 group-hover:bg-azure-400/25" />

              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure-500/15 text-azure-300 transition-all duration-300 group-hover:bg-azure-500 group-hover:text-white group-hover:shadow-glow">
                <service.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>

              <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-navy-200">
                {service.description}
              </p>

              <span className="relative mt-5 h-px w-full bg-gradient-to-r from-azure-400/0 via-azure-400/60 to-azure-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
