"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems, PORTAL_URL, CONTACT_ANCHOR } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn, scrollToSection } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);
  const activeId = useActiveSection(navItems.map((i) => i.href.replace("#", "")));

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100/70 bg-white/95 py-2.5 shadow-soft backdrop-blur-xl"
          // Alterado de bg-transparent para bg-white para garantir a leitura no fundo escuro
          : "border-b border-transparent bg-white py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Progus Contabilidade — voltar ao topo"
        >
          <Logo />
        </a>

        {/* Menu central — desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-azure-700"
                    : "text-navy-600 hover:text-navy-900"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-azure-50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botões — desktop */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Button as="a" href={PORTAL_URL} external variant="secondary" size="md">
            Portal do Cliente
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button as="a" href={CONTACT_ANCHOR} variant="primary" size="md">
            Quero ser cliente
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Toggle mobile */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 bg-white/70 text-navy-800 backdrop-blur transition hover:bg-navy-50 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      {/* Drawer mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-card-hover lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-navy-100 px-6 py-5">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition hover:bg-navy-50"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Mobile">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-navy-700 transition hover:bg-azure-50 hover:text-azure-700"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-navy-100 px-6 py-6">
                <Button
                  as="a"
                  href={PORTAL_URL}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Portal do Cliente
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button
                  as="a"
                  href={CONTACT_ANCHOR}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Quero ser cliente
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}