# 🏢 JA Contabilidade e Perícias — Landing Page

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://site-ja-contabilidade.vercel.app)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![License MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Landing page moderna e responsiva para JA Contabilidade e Perícias. Desenvolvida com **React + TypeScript**, otimizada para desktop e mobile, com foco em conversão e apresentação profissional de serviços.

**🔗 [Acesse o site →](https://site-ja-contabilidade.vercel.app)**

---

## ✨ Destaques

- ⚡ **Performance otimizada** — Build rápido com Vite, lazy loading de assets
- 📱 **Totalmente responsivo** — Mobile-first, desktop fluido (últimos 2 commits focados em mobile)
- 🎨 **Design profissional** — Identidade visual clara, alinhada com branding JA
- 🔍 **SEO-friendly** — Estrutura semântica, meta tags otimizadas
- 🚀 **Deploy contínuo** — Vercel com CI/CD automático
- ♿ **Acessibilidade** — Contraste adequado, navegação por teclado

---

## 📋 Seções

| Seção | Descrição | Arquivo |
|-------|-----------|---------|
| **Contexto 95%** | Introdução + estatística principal | `section-02.html` |
| **O Caminho** | Jornada e diferencial | `section-03.html` |
| **Comparação** | Como Fazemos vs. Concorrência | `section-04.html` |
| **Depoimentos** | Social proof de clientes | `section-05.html` |
| **Quem Somos** | Equipe + mapa de atuação | `section-06.html` |
| **Rodapé** | CTA, contato, links | `section-footer.html` |

---

## 🛠️ Stack Técnico

```
Frontend
├── React 18+ + TypeScript
├── Vite (dev server + build)
├── CSS vanilla (modular)
└── HTML semântico

Deployment
├── Vercel (automatic deploys)
├── DNS via Wix (transitioning)
└── Vercel analytics

Dev Tools
├── ESLint
├── TypeScript strict mode
└── Git workflow
```

---

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ e npm (ou pnpm/yarn)

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/octaviocrv/site-ja-contabilidade.git
cd site-ja-contabilidade

# Instale dependências
npm install

# Inicie o dev server
npm run dev
# → Acessa em http://localhost:5173

# Build para produção
npm run build

# Preview da build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
site-ja-contabilidade/
├── public/assets/
│   ├── destaques/          # Imagens de destaque/hero
│   ├── identidade/
│   │   ├── fotoscomfundo/  # Fotos da equipe com fundo
│   │   └── semfundo/       # Fotos recortadas
│   └── uploads/            # Assets dinâmicos
├── src/
│   ├── content/sections/   # HTML das seções
│   │   ├── section-02.html → Contexto 95%
│   │   ├── section-03.html → O Caminho
│   │   ├── section-04.html → Comparação
│   │   ├── section-05.html → Depoimentos
│   │   ├── section-06.html → Quem Somos + Mapa
│   │   └── section-footer.html → Rodapé
│   ├── App.tsx             # Componente principal (carrega seções)
│   ├── App.css             # Estilos globais
│   ├── index.css           # Reset + variáveis CSS
│   └── main.tsx            # Entry point React
├── index.html              # HTML base
├── tsconfig.json
├── vite.config.ts
├── package.json
└── eslint.config.js
```

---

## 🔄 Fluxo de Desenvolvimento

1. **HTML de seções** fica em `src/content/sections/` — fácil de editar
2. **Assets** estão organizados em `public/assets/` por categoria
3. **Estilos** são globais em `src/` e específicos por seção
4. **Refatoração sugerida**: Migrar seções HTML para componentes React dedicados (próximo step)

---

## 🚀 Deploy

O site está rodando na **Vercel**. Qualquer push para `main` dispara deploy automático:

```bash
git add .
git commit -m "ajustes para versão mobile"
git push origin main
# → Vercel auto-deploys em ~60s
```

**Status DNS**: Domínio gerenciado via Wix, apontando para Vercel.

---

## 📦 Scripts Disponíveis

```bash
npm run dev        # Dev server (localhost:5173)
npm run build      # Build para produção
npm run preview    # Preview da build localmente
npm run lint       # ESLint check
```

---

## 🎯 Roadmap

- [ ] Migrar seções HTML para componentes React reutilizáveis
- [ ] Adicionar animações ao scroll (Intersection Observer)
- [ ] CMS headless para edição de conteúdo (Sanity/Contentful)
- [ ] A/B testing nas CTAs
- [ ] Analytics avançados (Hotjar/Clarity)

---

## 📄 Licença

MIT — Sinta-se livre para usar como referência ou base para outros projetos.

---

## 👨‍💻 Autor

**Octávio Augusto** — Full Stack Developer  
- 🐙 GitHub: [@octaviocrv](https://github.com/octaviocrv)
- 💼 LinkedIn: [linkedin.com/in/octaviocrv](https://linkedin.com/in/octaviocrv)

---

## 🙏 Agradecimentos

- **JA Contabilidade e Perícias** — pela confiança no projeto
- **Vercel** — por infraestrutura sólida e deploys rápidos
- **React + TypeScript** — pela developer experience excepcional

---

**Dúvidas ou sugestões?** Abra uma issue ou entre em contato direto! 🚀
