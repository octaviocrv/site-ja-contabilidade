# Landing Page JA

Projeto da Landing Page JA em React + TypeScript + Vite.

## Estrutura Atual

```
LandingPageJA/
├─ public/
│  └─ assets/
│     ├─ destaques/
│     ├─ identidade/
│     │  ├─ fotoscomfundo/
│     │  └─ semfundo/
│     └─ uploads/
├─ src/
│  ├─ content/
│  │  └─ sections/
│  │     ├─ section-02.html
│  │     ├─ section-03.html
│  │     ├─ section-04.html
│  │     ├─ section-05.html
│  │     ├─ section-06.html
│  │     └─ section-footer.html
│  ├─ App.tsx
│  ├─ App.css
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Mapa das Seções

- section-02.html: bloco de contexto dos 95%
- section-03.html: seção O Caminho
- section-04.html: comparação Como Fazemos vs Outras empresas
- section-05.html: depoimentos
- section-06.html: Quem somos + mapa
- section-footer.html: rodapé

## Convenções de Organização

- Conteúdo de seção HTML fica centralizado em src/content/sections.
- Nome de seção segue padrão section-XX.html.
- Assets consumidos em runtime ficam em public/assets.
- Código React e estilos globais permanecem em src.

## Scripts

- npm run dev: ambiente local
- npm run build: build de produção
- npm run preview: preview da build

## Próximo Passo Sugerido

Para facilitar refatorações futuras, migrar seção por seção de HTML bruto para componentes React dedicados em src/components/sections.
