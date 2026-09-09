"use client";

import { ArrowUp } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { navItems, PORTAL_URL } from "@/data/navigation";
import { scrollToSection } from "@/lib/utils";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-azure-600/10 blur-[120px]" />

      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Marca + descrição */}
          <div className="lg:col-span-5">
            <Logo variant="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Contabilidade familiar com mais de 25 anos de história. Tradição,
              proximidade e tecnologia para a sua empresa crescer com segurança.
            </p>
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
