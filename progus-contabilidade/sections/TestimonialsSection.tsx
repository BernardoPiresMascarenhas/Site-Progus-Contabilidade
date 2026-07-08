"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-amber-400 text-amber-400" : "text-navy-200"
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="A confiança de quem caminha com a gente"
          description="Histórias reais de empresas que encontraram na Progus mais do que uma contabilidade — uma parceira."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-card"
            >
              <Quote className="absolute right-6 top-6 h-9 w-9 text-azure-100 transition-colors duration-300 group-hover:text-azure-200" />

              <Stars rating={t.rating} />

              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-600">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-azure-500 to-navy-700 font-display text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-sm text-navy-500">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
