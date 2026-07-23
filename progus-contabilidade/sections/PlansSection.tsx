"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { plans } from "@/data/plans";
import { CONTACT_ANCHOR } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function PlansSection() {
  return (
    <section id="planos" className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Perfis de cliente"
          title="Uma trilha para cada momento da sua empresa"
          description="Montamos o atendimento ideal para seu nível de complexidade e te apresentamos uma cotação sob medida."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1",
                plan.featured
                  ? "border-azure-300 bg-gradient-to-b from-azure-50 to-white shadow-card-hover"
                  : "border-navy-100 bg-white shadow-soft hover:border-azure-200 hover:shadow-card"
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-azure-600 px-3.5 py-1 text-xs font-semibold text-white shadow-soft">
                  Mais escolhido
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-wider text-azure-600">
                {plan.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {plan.description}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-navy-700"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-azure-100 text-azure-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href={CONTACT_ANCHOR}
                variant={plan.featured ? "primary" : "secondary"}
                size="md"
                className="mt-7 w-full"
              >
                Solicitar Cotação
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
