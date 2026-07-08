/**
 * Concatena classes condicionalmente sem dependências externas.
 * Substitui o clsx/cn para manter o projeto leve.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Rolagem suave até uma âncora, compensando o header fixo.
 * Usada pelos CTAs e pelo menu.
 */
export function scrollToSection(href: string): void {
  if (typeof window === "undefined") return;
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // Atualiza a URL sem recarregar a página.
  window.history.replaceState(null, "", href);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 11;
}

/** Máscara simples de telefone brasileiro: (00) 00000-0000 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
