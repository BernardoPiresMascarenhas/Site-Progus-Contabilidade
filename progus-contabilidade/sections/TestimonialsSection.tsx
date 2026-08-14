"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { testimonials, googleReviewsUrl } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

/** Acima disso o depoimento é recolhido para manter os cards na mesma altura. */
const CLAMP_THRESHOLD = 180;

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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.text.length > CLAMP_THRESHOLD;

  return (
    <motion.figure
      variants={fadeUp}
      className="group relative flex flex-col rounded-3xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-card lg:p-7"
    >
      <Quote className="absolute right-5 top-5 h-8 w-8 text-azure-100 transition-colors duration-300 group-hover:text-azure-200 lg:right-6 lg:top-6 lg:h-9 lg:w-9" />

      <Stars rating={testimonial.rating} />

      <div className="mt-4 flex-1">
        <blockquote
          className={cn(
            "text-[0.95rem] leading-relaxed text-navy-600",
            isLong && !expanded && "line-clamp-6"
          )}
        >
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-2 rounded text-sm font-semibold text-azure-600 transition-colors hover:text-azure-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-500 focus-visible:ring-offset-2"
          >
            {expanded ? "Ler menos" : "Ler mais"}
          </button>
        )}
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 pt-5">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br from-azure-500 to-navy-700 font-display text-sm font-bold text-white">
          {testimonial.name
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")}
        </span>
        {/* Altura do rodapé é fixa (1 linha de nome + 2 reservadas para
            cargo/empresa) para a divisória cair na mesma altura em todos os cards */}
        <div className="min-w-0">
          <p
            className="truncate font-semibold leading-snug text-navy-900"
            title={testimonial.name}
          >
            {testimonial.name}
          </p>
          <p
            className="line-clamp-2 min-h-[2.5rem] text-sm text-navy-500"
            title={`${testimonial.role} · ${testimonial.company}`}
          >
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
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
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-center gap-5 rounded-3xl border border-navy-100 bg-navy-50/60 px-7 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="font-display text-lg font-semibold text-navy-900">
              É cliente Progus? Deixe sua avaliação no Google
            </p>
            <p className="mt-1 text-sm text-navy-500">
              Sua experiência ajuda outros empreendedores a escolherem com
              segurança. Leva menos de um minuto.
            </p>
          </div>

          <Button
            as="a"
            href={googleReviewsUrl}
            external
            variant="secondary"
            size="md"
            className="flex-none"
          >
            Avaliar no Google
            <ExternalLink className="h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
