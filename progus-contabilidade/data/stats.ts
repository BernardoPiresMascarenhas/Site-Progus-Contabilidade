import { CalendarClock, Building, Smile, GraduationCap } from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  {
    icon: CalendarClock,
    value: 25,
    suffix: "+",
    label: "Anos de experiência",
  },
  {
    icon: Building,
    value: 1200,
    suffix: "+",
    label: "Empresas atendidas",
  },
  {
    icon: Smile,
    value: 98,
    suffix: "%",
    label: "Índice de satisfação",
  },
  {
    icon: GraduationCap,
    value: 18,
    label: "Especialistas no time",
  },
];
