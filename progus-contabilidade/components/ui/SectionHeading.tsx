"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-azure-300" : "text-azure-600"
          )}
        >
          <span
            className={cn(
              "h-px w-6",
              light ? "bg-azure-300/60" : "bg-azure-500/50"
            )}
          />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className={cn(
          "max-w-3xl text-balance font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            light ? "text-navy-100/80" : "text-navy-500"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
