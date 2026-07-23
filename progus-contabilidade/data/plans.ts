import type { Plan } from "@/types";

// A Progus não trabalha com tabela fixa de preços.
// Em vez de planos, segmentamos por PERFIL de cliente.
export const plans: Plan[] = [
  {
    id: "mei",
    name: "Essencial",
    tagline: "Começando",
    description:
      "Para quem precisa estar em dia com as obrigações, sem complicação.",
    benefits: [
      "Escrituração em dia",
      "Emissão de guias",
      "Suporte por canal digital",
    ],
  },
  {
    id: "simples",
    name: "Gestão ativa",
    tagline: "Em operação ativa",
    description:
      "Para negócios que precisam de informação para decidir, não só cumprir prazo.",
    benefits: [
      "Apuração mensal e folha",
      "Relatorios gerenciais",
      "Consultor dedicado",
    ],
    featured: true,
  },
  {
    id: "presumido",
    name: "Estratégico",
    tagline: "Ganhando escala",
    description:
      "Contabilidade como parceira de planejamento, não só compliance.",
    benefits: [
      "Planejamento tributário ativo",
      "Acompanhamento financeiro próximo",
      "Indicadores e relatórios de resultado",
    ],
  },
  {
    id: "crescimento",
    name: "Corporativo",
    tagline: "Estrutura complexa",
    description:
      "Para grupos de empresas e negócios com mais de um CNPJ.",
    benefits: [
      "Visão consolidada das empresas",
      "Apoio em mudanças societárias",
      "Acompanhamento estratégico",
    ],
  },
];
