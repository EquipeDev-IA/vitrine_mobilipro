# Mobili — React

Conversion du fichier `mobili.html` (site vitrine de gestion de flotte) en
projet React standard, propulsé par **Vite** et **React Router**.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## Structure

```
mobili-react/
├─ index.html                  # point d'entrée HTML (Vite)
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx                 # bootstrap React + BrowserRouter
   ├─ App.jsx                  # routes + layout global
   ├─ index.css                # styles globaux (extraits de mobili.html)
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ Particles.jsx
   │  └─ Icons.jsx
   ├─ hooks/
   │  ├─ useNavScroll.js          # ajoute la classe .scrolled sur le nav
   │  ├─ useScrollReveal.js       # anime les éléments .fade-up etc.
   │  └─ useScrollToTopOnRoute.js # remonte ou scrolle vers une ancre
   ├─ pages/
   │  ├─ Home.jsx
   │  ├─ About.jsx
   │  └─ Contact.jsx
   └─ sections/                # sections de la home découpées
      ├─ Hero.jsx
      ├─ StatsBand.jsx
      ├─ Features.jsx
      ├─ HowItWorks.jsx
      ├─ Testimonials.jsx
      └─ CTABanner.jsx
```

## Notes de conversion

- Le système de pages basé sur `display:none` a été remplacé par
  **React Router** (`/`, `/about`, `/contact`).
- Les animations de scroll (IntersectionObserver, particules, compteurs,
  effet du nav) sont encapsulées dans des hooks/composants réutilisables.
- Le formulaire de contact est un composant contrôlé qui conserve
  l'expérience d'origine (validation visuelle + état d'envoi + succès).
- L'intégralité du CSS d'origine est conservée dans `src/index.css`.
