import type { NavItem } from "@/types";

// Itens do menu central. "Contato" fica fora do menu por decisão de briefing,
// mas é o destino das âncoras dos CTAs ("Quero ser cliente" / "Solicitar Cotação").
export const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Equipe", href: "#equipe" },
];

export const PORTAL_URL = "https://vip.acessorias.com/progus";
export const CONTACT_ANCHOR = "#contato";
