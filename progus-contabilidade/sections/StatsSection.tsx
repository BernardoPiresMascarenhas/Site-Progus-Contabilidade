"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-navy-900 py-24 sm:py-28 lg:py-32"
    >
      {/* Atmosfera de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.06] [filter:invert(1)]" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-azure-500/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-azure-700/20 blur-[120px]" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Por que a Progus"
          title="Por que somos a escolha ideal de nossos clientes?"
          description="Números que traduzem anos de dedicação, proximidade e resultados reais para quem confia no nosso trabalho."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-azure-400/40 hover:bg-white/[0.08]"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-azure-500/15 text-azure-300 transition-all duration-300 group-hover:bg-azure-500 group-hover:text-white">
                <stat.icon className="h-7 w-7" strokeWidth={1.8} />
              </span>

              <p className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-navy-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
