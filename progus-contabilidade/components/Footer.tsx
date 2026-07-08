"use client";

import { Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { navItems, PORTAL_URL, CONTACT_ANCHOR } from "@/data/navigation";
import { scrollToSection } from "@/lib/utils";
import { services } from "@/data/services";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-azure-600/10 blur-[120px]" />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marca + descrição */}
          <div className="lg:col-span-5">
            <Logo/>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Contabilidade familiar com mais de 25 anos de história. Tradição,
              proximidade e tecnologia para a sua empresa crescer com segurança.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-navy-200 transition hover:border-azure-400/50 hover:bg-white/5 hover:text-white"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-navy-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT_ANCHOR}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(CONTACT_ANCHOR);
                  }}
                  className="text-navy-300 transition hover:text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Soluções
            </h4>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#servicos");
                    }}
                    className="text-navy-300 transition hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-navy-400">
            © {year} Progus Contabilidade. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-300 transition hover:text-white"
            >
              Portal do Cliente
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-navy-300 transition hover:text-white"
            >
              Voltar ao topo
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
