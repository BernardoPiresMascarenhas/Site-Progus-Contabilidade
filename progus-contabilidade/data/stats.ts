import { CalendarClock, Users, Calculator, Briefcase } from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  {
    icon: CalendarClock,
    prefix: "Desde ",
    value: 1987,
    suffix: "",
    label: "Tradição consolidada",
  },
  {
    icon: Users, // Alterado para ícone de usuários/sócios
    value: 700,
    suffix: "+",
    label: "Sócios atendidos em nossa história",
  },
  {
    icon: Calculator, // Alterado para calculadora (faz muito mais sentido para tributos)
    value: 4,
    suffix: "",
    label: " Todos os regimes: de MEI a Lucro Real",
  },
  {
    icon: Briefcase, // Alterado para maleta de negócios
    value: 4,
    suffix: "",
    label: "Segmentos Atendidos: serviços, comércio, indústria",
  },
];