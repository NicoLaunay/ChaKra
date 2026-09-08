# ChaKra

Application de gestion de feuilles de personnages pour le jeu de rôle
**Chroniques Oubliées Fantasy** (v1) : création et gestion de personnages,
PNJ et monstres — caractéristiques, équipement, inventaire, passages de
niveau, points de vie en cours de partie.

Projet personnel d'apprentissage. Stack : Vue 3 + TypeScript + Vite.

## Prérequis

- Node.js (version indiquée dans `.nvmrc`)
- npm

## Installation

```bash
npm install
```

## Scripts

```bash
npm run dev          # serveur de développement
npm run build        # build de production
npm run type-check   # vérifie le typage
npm run lint         # analyse le code
npm run test:unit    # tests unitaires
```

## Architecture

Architecture en couches (détails dans `docs/architecture.md`) :

- `src/domain/`      — règles métier COF, TypeScript pur, sans Vue
- `src/persistence/` — stockage local
- `src/ui/`          — composants Vue et écrans
- `src/content/`     — données de jeu (races, voies…), approche data-driven