# Progus Contabilidade — Landing Page

Landing page institucional (One Page) para a Progus Contabilidade.
Construída com **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React**.

---

## Stack

| Tecnologia    | Uso                                        |
| ------------- | ------------------------------------------ |
| Next.js 14    | App Router, SSG, Route Handlers            |
| TypeScript    | Tipagem estática em todo o projeto         |
| Tailwind CSS  | Design system, responsividade, tema        |
| Framer Motion | Animações de scroll, stagger e contadores  |
| Lucide React  | Ícones                                     |
| next/font     | Fontes (Inter + Plus Jakarta Sans)         |

---

## Instalação rápida

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# abre em http://localhost:3000

# 3. Build de produção
npm run build && npm start
```

> Requer Node.js 18.18+ (ou 20+).

---

## Estrutura de pastas

```
progus-contabilidade/
├── app/
│   ├── api/contact/route.ts   # Route Handler do formulário (ponto de integração)
│   ├── globals.css            # Tailwind + smooth scroll + estilos base
│   ├── layout.tsx             # Fontes, metadata/SEO
│   └── page.tsx               # Monta todas as seções
├── components/
│   ├── ui/                    # Button, Container, SectionHeading, AnimatedCounter, Logo
│   ├── Header.tsx             # Header fixo, blur ao rolar, navbar ativa, drawer mobile
│   └── Footer.tsx
├── sections/                  # Uma seção por arquivo
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── PlansSection.tsx
│   ├── StatsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── TeamSection.tsx
│   └── ContactSection.tsx
├── data/                      # Conteúdo mockado (serviços, planos, depoimentos, etc.)
├── hooks/                     # useActiveSection, useScrolled
├── lib/                       # motion (variantes), utils (cn, scroll, validação, máscara)
├── types/                     # Interfaces compartilhadas
├── tailwind.config.ts         # Paleta navy/azure, sombras, animações
└── ...configs
```

---

## Pontos que você PRECISA ajustar antes de publicar

1. **Formulário de contato (variáveis de ambiente).**
   O formulário já envia de verdade: `sections/ContactSection.tsx` faz `POST /api/contact` e
   `app/api/contact/route.ts` dispara o e-mail via [Resend](https://resend.com).
   Falta só preencher as credenciais — copie `.env.example` para `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

   | Variável | Para que serve |
   | --- | --- |
   | `RESEND_API_KEY` | Chave criada em resend.com/api-keys |
   | `CONTACT_TO_EMAIL` | Caixa que recebe as solicitações |
   | `CONTACT_FROM_EMAIL` | Remetente; o domínio precisa estar verificado no Resend |

   Sem domínio verificado, use `onboarding@resend.dev` como remetente para testar
   (o Resend só entrega no e-mail dono da conta nesse modo). Em produção, lembre de
   cadastrar as mesmas variáveis no painel do host (Vercel, etc.).
   O `replyTo` do e-mail já vem com o endereço de quem preencheu, então basta responder.

2. **Mapa do Google.**
   Em `ContactSection.tsx`, o `<iframe>` usa um endereço genérico de BH.
   Gere o embed real em Google Maps → Compartilhar → Incorporar um mapa, e cole no `src`.

3. **Dados mockados.**
   Telefone, e-mail, endereço, nomes da equipe, depoimentos, URL do Portal do Cliente
   (`data/navigation.ts` → `PORTAL_URL`) e estatísticas são fictícios. Substitua pelos reais.

4. **Logo.**
   `components/ui/Logo.tsx` é um SVG inline provisório. Troque pela marca oficial se houver.

---

## Decisões de implementação

- **Navbar ativa**: `IntersectionObserver` (`hooks/useActiveSection.ts`) destaca a seção visível.
- **Smooth scroll**: nativo via CSS + `scrollToSection()` compensando o header fixo (`scroll-margin-top`).
- **Acessibilidade**: foco visível, `aria-label` nos controles, `prefers-reduced-motion` respeitado.
- **Performance**: contadores e reveals disparam só ao entrar na viewport (`once: true`); mapa com `loading="lazy"`.
- **Zero dependências supérfluas**: `cn` próprio em vez de clsx; nenhuma lib de carrossel.

---

## Sugestões de melhorias futuras

- **Backend do formulário** com proteção anti-spam (honeypot + rate limit ou Turnstile/reCAPTCHA).
- **CMS** (Sanity, Contentful ou MDX) para a equipe editar serviços/depoimentos sem mexer no código.
- **Blog/Conteúdo** para SEO orgânico (rota `/blog` com App Router + `generateStaticParams`).
- **next/image** + `sitemap.ts` + `robots.ts` para SEO técnico completo.
- **Analytics** (Vercel Analytics ou GA4) e eventos de conversão nos CTAs.
- **Testes**: Playwright para o fluxo do formulário; Lighthouse CI no pipeline.
- **i18n** caso atendam clientes em outras línguas.
- **Dark mode** — a paleta já está em tokens, então é incremental.
