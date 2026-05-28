# Carlota Menéndez Landa — Portfolio

Personal portfolio of **Carlota Menéndez Landa**, Junior SAP Integration Consultant.
Bilingual (ES / EN), built with **React + Vite**.

🔗 Live: _add your deployment URL here once published_

## Stack

- React 19 + Vite
- Plain CSS with design tokens (no UI framework)
- i18n via a single `src/i18n.js` content file (ES / EN toggle)

## Project structure

```
src/
├── config.js          ← YOUR data & links (edit me!)
├── i18n.js            ← all bilingual copy
├── data/projects.js   ← integration case studies
├── components/        ← Navbar, Hero, About, Experience, Skills,
│                         Projects, ProjectModal, Education, Contact, Footer
└── index.css          ← all styles (design tokens at the top)

public/
└── CV_Carlota_Menendez_Landa.pdf   ← downloadable CV

integration-cases/     ← real SAP Integration Suite artifacts
                          (Groovy, XSLT, mappings, sample payloads, guides)
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Before you publish — quick checklist

Edit **`src/config.js`** and replace the `// TODO` placeholders:

- `linkedin` → your real LinkedIn URL
- `github` → your real GitHub URL
- `integrationCasesRepo` → the repo where you push `integration-cases/`

## Deploy for free

### Option A — Vercel (recommended, zero config)

1. Push this folder to a GitHub repo.
2. Go to <https://vercel.com> → *Add New Project* → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`. Deploy.

### Option B — Netlify

1. Push to GitHub → <https://app.netlify.com> → *Add new site* → import.
2. Build command `npm run build`, publish directory `dist`.

### Option C — GitHub Pages

1. `npm i -D gh-pages` and add to `package.json`:
   ```json
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
2. Set `base: "/<repo-name>/"` in `vite.config.js`.
3. `npm run deploy`.

## The integration cases

The `integration-cases/` folder holds hands-on SAP Integration Suite scenarios you can
build on a free SAP BTP trial. See [`integration-cases/README.md`](./integration-cases/README.md).
You can keep them in this same repo, or split them into a dedicated repo and point
`integrationCasesRepo` in `src/config.js` at it.
