"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, Users, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const values = [
  {
    icon: Users,
    title: "Empresa Familiar",
    text: "Tradição conduzida por Hélio e Gabriel, tratando cada cliente como parte da família.",
  },
  {
    icon: ShieldCheck,
    title: "Credibilidade",
    text: "Décadas de atuação com responsabilidade técnica e segurança nas decisões.",
  },
  {
    icon: HeartHandshake,
    title: "Proximidade",
    text: "Atendimento claro e alinhado às necessidades reais do seu negócio.",
  },
  {
    icon: Sparkles,
    title: "Melhoria Contínua",
    text: "Organização e planejamento com atualização constante das nossas soluções.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      <Container>
        
        {/* PARTE SUPERIOR: Fotos na Esquerda e Textos na Direita */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Esquerda: Fotos Sobrepostas */}
          {/* Adicionado mb-12 para dar espaço para a foto que desceu no mobile */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:w-11/12 mb-12 lg:mb-0"
          >
            {/* Foto 1 (Maior, no fundo com efeito Glow no Hover) */}
            <div className="relative aspect-[4/3] w-[85%] overflow-hidden rounded-2xl transition-all duration-500 shadow-[0_0_40px_rgba(14,165,233,0.45)]">
              <Image
                src="/foto-sobre-1.jpg"
                alt="Hélio e família Progus"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy-900/10" />
            </div>

            {/* Foto 2 (Menor, movida mais para baixo e para a direita, com efeito Glow no Hover) */}
            <div className="absolute -bottom-16 -right-8 w-[55%] aspect-square overflow-hidden rounded-2xl border-[6px] border-white bg-white z-10 transition-all duration-500 shadow-[0_0_40px_rgba(14,165,233,0.45)] sm:-right-12 lg:-bottom-20 lg:-right-24">
              <Image
                src="/foto-sobre-2.jpg"
                alt="Gabriel e equipe Progus"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Elemento Decorativo pontilhado atrás */}
            <div className="absolute -left-8 -top-8 -z-10 h-32 w-32 bg-grid-faint bg-[size:20px_20px] opacity-50" />
          </motion.div>

          {/* Direita: Textos (História) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-azure-600"
            >
              <span className="h-px w-6 bg-azure-500/50" />
              Sobre nós
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl"
            >
              Experiência, credibilidade e responsabilidade
            </motion.h2>

            {/* Adicionado text-justify aqui para alinhar as bordas do texto */}
            <motion.div variants={fadeUp} className="mt-6 space-y-4 text-lg leading-relaxed text-navy-500 text-justify">
              <p>
                A Progus Contabilidade é uma empresa familiar construída com base em experiência, credibilidade e responsabilidade ao longo de décadas de atuação.
              </p>
              <p>
                O nome Progus nasce de &ldquo;Processo Gustavo&rdquo;, em referência ao filho de Hélio, refletindo desde a origem o compromisso com organização, planejamento e melhoria contínua — valores que seguem presentes em cada atendimento.
              </p>
              <p>
                Hoje, a empresa é conduzida por Hélio e seu filho Gabriel, ambos contadores, que unem tradição e atualização constante para oferecer soluções seguras, eficientes e alinhadas às necessidades de cada cliente.
              </p>
              <p>
                Nosso trabalho é pautado por proximidade, clareza e responsabilidade técnica, garantindo que cada cliente tenha segurança nas decisões e confiança na gestão do seu negócio.
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* PARTE INFERIOR: Tópicos um ao lado do outro */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 lg:mt-32"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:border-azure-200 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600 transition-colors duration-300 group-hover:bg-azure-600 group-hover:text-white">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}