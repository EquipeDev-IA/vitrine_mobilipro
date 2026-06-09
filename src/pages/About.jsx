import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { ArrowUpRight } from '../components/Icons.jsx';

const ABOUT_STATS = [
  { strong: '2021', label: 'Année de création' },
  { strong: '12k+', label: 'Véhicules gérés' },
  { strong: '340+', label: 'Clients actifs' },
  { strong: '18', label: 'Collaborateurs' }
];

const MISSIONS = [
  {
    n: '01',
    title: 'Simplifier la complexité',
    desc: "Rendre la gestion de flotte accessible à tous — du particulier avec une voiture au groupe avec 500 véhicules. Notre interface cache la complexité sans sacrifier la puissance."
  },
  {
    n: '02',
    title: 'Anticiper, pas réagir',
    desc: "L'IA au cœur de Mobili permet d'agir avant que les problèmes surviennent. Notre vision : zéro panne non planifiée, zéro dépassement de budget surprise."
  },
  {
    n: '03',
    title: 'Conduire vers le futur',
    desc: 'La transition énergétique est une réalité. Mobili accompagne la gestion de flottes mixtes (thermique, électrique, hybride) et aide à réduire votre empreinte carbone.'
  }
];

const TIMELINE = [
  {
    year: '2021 — Q1',
    badge: '21',
    title: "L'idée germe",
    desc: 'Lucas Martin et Camille Dufour créent Mobili depuis un garage à Toulouse. Le premier prototype voit le jour.'
  },
  {
    year: '2022 — Q2',
    badge: '22',
    title: 'Levée de fonds Seed',
    desc: "1,2M€ levés auprès d'investisseurs français. L'équipe passe de 3 à 8 personnes. Lancement de la bêta avec 15 entreprises pilotes."
  },
  {
    year: '2023 — Q3',
    badge: '23',
    title: 'Lancement grand public',
    desc: "Ouverture aux particuliers avec l'offre Solo. Cap des 1 000 clients actifs. Prix Innovation Mobilité ADEME."
  },
  {
    year: '2024 — Q1',
    badge: '24',
    title: 'Intégration IA prédictive',
    desc: 'Déploiement du moteur de maintenance prédictive. Réduction moyenne des pannes de 67% chez nos clients.'
  },
  {
    year: '2025 — Q4',
    badge: '25',
    title: 'Série A — 5M€',
    desc: 'Expansion européenne en cours. Partenariats avec les principaux constructeurs. 12 000 véhicules sous gestion.'
  }
];

const TEAM = [
  { initials: 'LM', name: 'Lucas Martin', role: 'Co-fondateur & CEO', bio: 'Ex-Directeur logistique. Expert en gestion opérationnelle de flottes B2B.', avStyle: { background: 'rgba(0,112,243,0.15)', color: '#60a5fa' } },
  { initials: 'CD', name: 'Camille Dufour', role: 'Co-fondatrice & CTO', bio: 'Ingénieure IA et systèmes embarqués. PhD en optimisation algorithmique.', avStyle: { background: 'rgba(0,230,118,0.12)', color: '#00E676' } },
  { initials: 'AB', name: 'Antoine Bernard', role: 'CPO — Design', bio: 'Ancien UX Lead chez Renault Digital. Obsédé par la simplicité des interfaces.', avStyle: { background: 'rgba(167,139,250,0.15)', color: '#a78bfa' } },
  { initials: 'MR', name: 'Marie Rousseau', role: 'Head of Sales', bio: "15 ans dans la mobilité d'entreprise. Ancienne chez Arval et ALD Automotive.", avStyle: { background: 'rgba(251,191,36,0.15)', color: '#fbbf24' } }
];

const VALUES = [
  {
    title: 'Sécurité avant tout',
    desc: 'Données hébergées en France (RGPD), chiffrées de bout en bout. Nous ne vendons jamais vos données. Jamais.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  },
  {
    title: 'Fiabilité sans compromis',
    desc: '99.9% de disponibilité garantie. Architecture redondante, sauvegarde horaire, support 7j/7.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    )
  },
  {
    title: 'Centrés sur l’utilisateur',
    desc: 'Chaque fonctionnalité est validée avec de vrais utilisateurs. Nos clients définissent notre roadmap.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    )
  },
  {
    title: 'Impact environnemental',
    desc: 'Nos clients réduisent en moyenne 18% leurs émissions CO₂. Infrastructure 100% énergies renouvelables.',
    icon: (
      <>
        <path d="M2 22 16 8M16 8H10M16 8v6" />
        <circle cx="6" cy="6" r="4" />
      </>
    )
  }
];

export default function About() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="wrap">
          <div className="about-hero-grid">
            <div>
              <div className="tag fade-in">
                <span className="tag-dot" aria-hidden="true" />
                Notre histoire
              </div>
              <h1 id="about-title" className="fade-up">
                Nés d'un besoin
                <br />
                <span className="gradient-text">réel du terrain</span>
              </h1>
              <p className="sub fade-up d1" style={{ marginTop: 20 }}>
                Mobili est né en 2021 de la frustration de deux entrepreneurs
                face à l'absence d'outils modernes pour gérer leur flotte.
                Aujourd'hui, nous servons plus de 340 entreprises et des milliers
                de particuliers à travers toute la France.
              </p>
              <a
                href="/contact"
                className="btn-primary"
                style={{ marginTop: 36, display: 'inline-flex' }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                }}
              >
                Rejoindre l'aventure
                <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="about-stats-grid slide-right" role="list" aria-label="Statistiques">
              {ABOUT_STATS.map((s) => (
                <div className="a-stat glass" role="listitem" key={s.label}>
                  <strong>{s.strong}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section aria-labelledby="mission-title">
        <div className="wrap">
          <div className="center">
            <div className="tag fade-in">
              <span className="tag-dot" aria-hidden="true" />
              Notre mission
            </div>
            <h2 id="mission-title" className="fade-up">
              Ce qui nous <span className="gradient-text">anime</span>
            </h2>
          </div>
          <div className="mission-cards" role="list">
            {MISSIONS.map((m, i) => (
              <div className={`m-card glass fade-up${i ? ` d${i}` : ''}`} role="listitem" key={m.n}>
                <div className="m-n">{`// ${m.n}`}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section aria-labelledby="tl-title">
        <div className="wrap">
          <div className="center">
            <div className="tag fade-in">
              <span className="tag-dot" aria-hidden="true" />
              Notre parcours
            </div>
            <h2 id="tl-title" className="fade-up">
              Une croissance <span className="gradient-text">construite pas à pas</span>
            </h2>
          </div>
          <div className="timeline" role="list">
            {TIMELINE.map((t, i) => (
              <div className={`tl-item fade-up${i ? ` d${(i % 3) + 1}` : ''}`} role="listitem" key={t.year}>
                {i % 2 === 0 ? (
                  <>
                    <div className="tl-content glass">
                      <div className="tl-year">{t.year}</div>
                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                    </div>
                    <div className="tl-dot" aria-hidden="true">{t.badge}</div>
                    <div className="tl-empty" />
                  </>
                ) : (
                  <>
                    <div className="tl-empty" />
                    <div className="tl-dot" aria-hidden="true">{t.badge}</div>
                    <div className="tl-content glass">
                      <div className="tl-year">{t.year}</div>
                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section aria-labelledby="team-title">
        <div className="wrap">
          <div className="center">
            <div className="tag fade-in">
              <span className="tag-dot" aria-hidden="true" />
              L'équipe
            </div>
            <h2 id="team-title" className="fade-up">
              Les visages derrière <span className="gradient-text">Mobili</span>
            </h2>
            <p className="sub fade-up d1">
              Une équipe pluridisciplinaire passionnée par la mobilité et la
              technologie.
            </p>
          </div>
          <div className="team-grid" role="list">
            {TEAM.map((m, i) => (
              <div className={`team-card glass fade-up${i ? ` d${i}` : ''}`} role="listitem" key={m.name}>
                <div className="team-av" style={m.avStyle} aria-hidden="true">
                  {m.initials}
                </div>
                <h3>{m.name}</h3>
                <span className="role">{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" aria-hidden="true" />

      <section style={{ paddingBottom: 120 }} aria-labelledby="values-title">
        <div className="wrap">
          <div className="center">
            <div className="tag fade-in">
              <span className="tag-dot" aria-hidden="true" />
              Nos valeurs
            </div>
            <h2 id="values-title" className="fade-up">
              Ce que nous <span className="gradient-text">défendons</span>
            </h2>
          </div>
          <div className="values-grid" role="list">
            {VALUES.map((v, i) => (
              <div className={`v-card glass fade-up${i ? ` d${i}` : ''}`} role="listitem" key={v.title}>
                <div className="v-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8">
                    {v.icon}
                  </svg>
                </div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
