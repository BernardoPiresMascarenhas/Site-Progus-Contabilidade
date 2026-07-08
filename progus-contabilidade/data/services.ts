import {
  Building2,
  Lightbulb,
  Calculator,
  Users2,
  ShieldCheck,
  FileCheck2,
  Wallet,
  LineChart,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: Building2,
    title: "Abertura de empresas",
    description:
      "Cuidamos de todo o processo de constituição: enquadramento, registros e licenças, para você começar com a base certa.",
  },
  {
    icon: Lightbulb,
    title: "Contabilidade consultiva",
    description:
      "Mais do que números: traduzimos a contabilidade em decisões, com acompanhamento próximo do seu negócio.",
  },
  {
    icon: Calculator,
    title: "Planejamento tributário",
    description:
      "Analisamos o regime ideal e estruturamos sua carga tributária dentro da lei, com economia real e segura.",
  },
  {
    icon: Users2,
    title: "Folha de pagamento",
    description:
      "Admissões, férias, rescisões e obrigações trabalhistas processadas com precisão e total conformidade.",
  },
  {
    icon: ShieldCheck,
    title: "Assessoria fiscal",
    description:
      "Apuração de impostos, escrituração e entrega de obrigações em dia, mantendo sua empresa sempre regular.",
  },
  {
    icon: FileCheck2,
    title: "Regularização empresarial",
    description:
      "Resolvemos pendências, parcelamentos e inconsistências para deixar sua empresa em situação regular.",
  },
  {
    icon: Wallet,
    title: "BPO financeiro",
    description:
      "Terceirize contas a pagar e a receber, conciliações e fluxo de caixa com relatórios claros e confiáveis.",
  },
  {
    icon: LineChart,
    title: "Gestão contábil",
    description:
      "Demonstrações, indicadores e relatórios gerenciais que mostram a real saúde financeira do seu negócio.",
  },
];
