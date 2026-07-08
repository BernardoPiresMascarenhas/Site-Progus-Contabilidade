import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Progus Contabilidade | Tradição e proximidade para a sua empresa",
  description:
    "Contabilidade familiar com mais de 25 anos de história. Abertura de empresas, planejamento tributário, folha de pagamento, BPO financeiro e contabilidade consultiva.",
  keywords: [
    "contabilidade",
    "abertura de empresa",
    "planejamento tributário",
    "folha de pagamento",
    "BPO financeiro",
    "Belo Horizonte",
  ],
  openGraph: {
    title: "Progus Contabilidade",
    description:
      "Tradição e proximidade para a sua empresa crescer com segurança.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
