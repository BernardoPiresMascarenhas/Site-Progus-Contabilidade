import type { NavItem } from "@/types";

// Itens do menu central. "Contato" também é o destino das âncoras dos CTAs
// ("Quero ser cliente" / "Solicitar Cotação").
export const navItems: NavItem[] = [
  { label: "Início", href: "#top" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const PORTAL_URL = "https://vip.acessorias.com/progus";
export const CONTACT_ANCHOR = "#contato";

// WhatsApp — número no formato internacional, só dígitos (55 + DDD + número).
export const WHATSAPP_NUMBER = "5531987429058";

/** Telefone fixo — exibido na seção de contato. */
export const PHONE_DISPLAY = "(31) 3421-6103";
export const PHONE_HREF = "tel:+553134216103";

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Progus Contabilidade e gostaria de saber mais sobre os serviços.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
