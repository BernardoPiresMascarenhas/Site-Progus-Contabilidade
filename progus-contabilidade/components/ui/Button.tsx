"use client";

import { forwardRef } from "react";
import { cn, scrollToSection } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-azure-500 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-azure-600 text-white shadow-soft hover:bg-azure-700 hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-navy-200 bg-white/80 text-navy-800 backdrop-blur hover:border-azure-300 hover:bg-azure-50 hover:text-azure-700",
  ghost: "text-navy-700 hover:bg-navy-50 hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

// Botão como <button>
interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

// Botão como <a> (link externo ou âncora com scroll suave)
interface AnchorProps
  extends BaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  as: "a";
  href: string;
  external?: boolean;
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | AnchorProps
>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "a") {
    const { href, external, ...anchorRest } =
      rest as Omit<AnchorProps, keyof BaseProps | "as">;

    // Âncora interna -> scroll suave; externa -> nova aba.
    const isAnchor = href.startsWith("#");

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (isAnchor) {
            e.preventDefault();
            scrollToSection(href);
          }
          anchorRest.onClick?.(e);
        }}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
