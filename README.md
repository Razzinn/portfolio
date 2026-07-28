# Portfolio — Razvan-Mihai Ignat

Portfolio personale realizzato con React + Vite, con supporto TypeScript, dark mode, animazioni Framer Motion e backend Spring Boot per guestbook e progetti.

## Tech Stack

**Frontend**
- React 19, TypeScript, Vite
- Framer Motion (animazioni)
- CSS puro (responsive, dark/light theme)

**Backend** (separato)
- Java 17+, Spring Boot, Spring Data JPA
- MySQL
- REST API

## Funzionalità

- Hero con introduzione animata
- Sezione About con highlight e link CV
- Skills categorizzate
- Progetti (caricati da API o fallback locale)
- Guestbook interattivo (invia e leggi messaggi)
- Contatti con form funzionante
- Dark / Light mode

## Sviluppo

```bash
npm install
npm run dev       # sviluppo su http://localhost:5173
npm run build     # produzione in dist/
npm run preview   # preview build
npm run lint      # ESLint
npm run test      # Vitest
```

## Struttura

```
src/
├── components/   # Componenti React
├── data/         # Dati statici (progetti, skills, info)
├── App.tsx
├── main.tsx
└── index.css

public/
├── CV_Ignat_Razvan_Mihai.pdf
└── *.png          # Screenshot progetti
```

## Deploy

Build statici in `dist/`, ospitabili su Vercel, Netlify, GitHub Pages o simile.
