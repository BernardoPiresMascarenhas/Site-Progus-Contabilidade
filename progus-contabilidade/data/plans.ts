import type { Plan } from "@/types";

// A Progus não trabalha com tabela fixa de preços.
// Em vez de planos, segmentamos por PERFIL de cliente.
export const plans: Plan[] = [
  {
    id: "mei",
    name: "MEI",
    tagline: "Para quem está começando",
    description:
      "Suporte completo para o microempreendedor que quer formalizar e crescer sem dor de cabeça.",
    benefits: [
      "Declaração anual (DASN-SIMEI)",
      "Emissão e controle de guias",
      "Orientação para crescimento",
      "Suporte por WhatsApp",
    ],
  },
  {
    id: "simples",
    name: "Simples Nacional",
    tagline: "O mais escolhido",
    description:
      "Gestão contábil e fiscal completa para pequenas e médias empresas no regime Simples.",
    benefits: [
      "Apuração mensal do Simples",
      "Folha de pagamento incluída",
      "Obrigações acessórias em dia",
      "Consultor contábil dedicado",
    ],
    featured: true,
  },
  {
    id: "presumido",
    name: "Lucro Presumido",
    tagline: "Para faturamentos maiores",
    description:
      "Estrutura tributária e contábil para empresas que ultrapassaram o limite do Simples.",
    benefits: [
      "Planejamento tributário ativo",
      "Apuração de PIS, COFINS, IRPJ e CSLL",
      "Relatórios gerenciais mensais",
      "Reuniões periódicas de resultado",
    ],
  },
  {
    id: "crescimento",
    name: "Empresas em crescimento",
    tagline: "Escala com segurança",
    description:
      "Para negócios em expansão que precisam de contabilidade estratégica e BPO financeiro.",
    benefits: [
      "Contabilidade consultiva",
      "BPO financeiro completo",
      "Indicadores e dashboards",
      "Acompanhamento estratégico",
    ],
  },
];
