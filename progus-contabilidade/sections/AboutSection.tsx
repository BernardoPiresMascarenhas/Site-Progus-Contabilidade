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
    text: "Tradição, confiança e atendimento próximo há mais de três décadas.",
  },
  {
    icon: ShieldCheck,
    title: "Consistência",
    text: " Informações confiáveis e consistentes, alinhadas às melhores práticas da contabilidade.",
  },
  {
    icon: HeartHandshake,
    title: "Proximidade",
    text: "Estamos ao lado da sua empresa, oferecendo orientação em cada etapa do seu negócio.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia",
    text: "Aplicamos tecnologia para simplificar processos e otimizar a gestão do seu negócio.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <Container>

        {/* FAIXA 1: Fotos na esquerda, texto na direita */}
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* Esquerda: composição com a foto da família + o retrato do Hélio */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto mb-28 w-full max-w-md lg:mx-0 lg:mb-0 lg:max-w-none"
          >
            {/* Foto principal (horizontal) */}
            <div className="relative aspect-[3/2] w-[88%] overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(14,165,233,0.35)]">
              <Image
                src="/sobre01.jpeg"
                alt="Família Progus reunida ao ar livre"
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy-900/10" />
            </div>

            {/* Foto secundária (vertical), sobreposta no canto inferior direito */}
            <div className="absolute -bottom-24 -right-4 z-10 aspect-[3/4] w-[40%] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_0_40px_rgba(14,165,233,0.35)] sm:-right-8 lg:-bottom-16 lg:-right-14">
              <Image
                src="/foto-sobre-2.jpg"
                alt="Hélio com o neto no colo"
                fill
                sizes="(max-width: 1024px) 40vw, 18vw"
                className="object-cover"
              />
            </div>

            {/* Elemento decorativo pontilhado atrás */}
            <div className="absolute -left-8 -top-8 -z-10 h-32 w-32 bg-grid-faint bg-[size:20px_20px] opacity-50" />
          </motion.div>

          {/* Direita: abertura da história */}
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

            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-justify text-lg leading-relaxed text-navy-500"
            >
              <p>
                A Progus Contabilidade é uma empresa familiar construída com base em experiência, credibilidade e responsabilidade ao longo de décadas de atuação.
              </p>
              <p>
                O nome Progus nasce de &ldquo;Processo Gustavo&rdquo;, em referência ao filho de Hélio, refletindo desde a origem o compromisso com organização, planejamento e melhoria contínua — valores que seguem presentes em cada atendimento.
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* FAIXA 2: Texto na esquerda, fotos na direita */}
        <div className="mt-28 grid items-center gap-16 lg:mt-36 lg:grid-cols-2 lg:gap-20">

          {/* Esquerda: continuação da história */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h3
              variants={fadeUp}
              className="text-balance font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 sm:text-3xl"
            >
              Uma história que passa de pai para filho
            </motion.h3>

            <motion.div
              variants={fadeUp}
              className="mt-6 space-y-4 text-justify text-lg leading-relaxed text-navy-500"
            >
              <p>
                Hoje, a empresa é conduzida por Hélio e seu filho Gabriel, ambos contadores, que unem tradição e atualização constante para oferecer soluções seguras, eficientes e alinhadas às necessidades de cada cliente.
              </p>
              <p>
                Nosso trabalho é pautado por proximidade, clareza e responsabilidade técnica, garantindo que cada cliente tenha segurança nas decisões e confiança na gestão do seu negócio.
              </p>
            </motion.div>
          </motion.div>

          {/* Direita: composição com o retrato vertical + a foto do abraço */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto mb-16 mt-4 w-full max-w-md lg:mx-0 lg:mb-0 lg:mt-0 lg:max-w-none"
          >
            {/* Foto principal (vertical) */}
            <div className="relative ml-auto aspect-[3/4] w-[72%] overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(14,165,233,0.35)]">
              <Image
                src="/sobre03.jpeg"
                alt="Hélio e Rose com os netos no colo"
                fill
                sizes="(max-width: 1024px) 70vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-navy-900/10" />
            </div>

            {/* Foto secundária (horizontal), sobreposta no canto inferior esquerdo */}
            <div className="absolute -bottom-12 -left-2 z-10 aspect-[3/2] w-[58%] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_0_40px_rgba(14,165,233,0.35)] sm:-left-6 lg:-bottom-14 lg:-left-12">
              <Image
                src="/foto-sobre-1.jpg"
                alt="Abraço em família da Progus"
                fill
                sizes="(max-width: 1024px) 58vw, 26vw"
                className="object-cover"
              />
            </div>

            {/* Elemento decorativo pontilhado atrás */}
            <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 bg-grid-faint bg-[size:20px_20px] opacity-50" />
          </motion.div>

        </div>

        {/* PARTE INFERIOR: Tópicos um ao lado do outro */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24 lg:mt-32"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:shadow-card"
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
