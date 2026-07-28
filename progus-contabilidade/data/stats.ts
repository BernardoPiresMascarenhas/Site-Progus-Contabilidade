import { CalendarClock, Users, Calculator, Briefcase } from "lucide-react";
// O "as any" abaixo garante que a Vercel não trave a compilação caso o seu 
// arquivo types.ts ainda exija que 'value' seja um número.
export const stats: any[] = [
  {
    icon: CalendarClock,
    prefix: "Desde ",
    value: 1987,
    suffix: "",
    label: "Tradição consolidada",
  },
  {
    icon: Users,
    value: 700,
    suffix: "+",
    label: "Sócios atendidos em nossa história",
  },
  {
    icon: Calculator,
    textValue: "Todos os regimes atendidos",
    label: "Do MEI ao Lucro Real",
  },
  {
    icon: Briefcase,
    textValue: "Segmentos Atendidos",
    label: "Serviços, Comércio e Indústria",
  },
];