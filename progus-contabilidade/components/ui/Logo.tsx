import Image from "next/image";
import { cn } from "@/lib/utils";

type Variant = "header" | "footer";

/**
 * Cada arquivo tem uma proporção própria — o box acompanha essa razão para não
 * sobrar espaço vazio nas laterais (object-contain centraliza o desenho).
 */
const logos: Record<Variant, { src: string; box: string }> = {
  header: { src: "/logo-progus2.png", box: "h-16 w-[164px]" }, // ~2.55:1
  footer: { src: "/logoFooter.png", box: "h-16 w-[174px]" }, // ~2.72:1 (versão para fundo escuro)
};

interface LogoProps {
  variant?: Variant;
  /** Sobrescreve o tamanho padrão do box (ex.: o header usa uma versão maior). */
  className?: string;
}

export function Logo({ variant = "header", className }: LogoProps) {
  const { src, box } = logos[variant];

  return (
    <div className={cn("relative", box, className)}>
      <Image
        src={src}
        alt="Logo Progus Contabilidade"
        fill
        sizes="(max-width: 1024px) 190px, 230px"
        className="object-contain"
        // Só o header está acima da dobra e precisa carregar imediatamente.
        priority={variant === "header"}
      />
    </div>
  );
}
