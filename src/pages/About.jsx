import { useNavigate } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { ArrowUpRight } from '../components/Icons.jsx';

const ABOUT_STATS = [
  { strong: '2022', label: 'Année de création' },
  { strong: '1000+', label: 'Véhicules gérés' },
  { strong: '200+', label: 'Partenaires clients' },
  { strong: '40', label: 'Collaborateurs' }
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

const TEAM = [
  { initials: 'JB', name: 'Jean Yves Bragbo', role: 'Co-founder & CEO', bio: "Entrepreneur & Ingénieur en Intelligence Artificielle.", avStyle: { background: 'rgba(0,230,118,0.12)', color: '#00E676' } },
  { initials: 'SB', name: 'Syriaque Belembete', role: 'Co-founder & CTO', bio: 'Entrepreneur & Développeur Full Stack.', avStyle: { background: 'rgba(0,112,243,0.15)', color: '#60a5fa' } }
];

const VALUES = [
  {
    title: 'Sécurité avant tout',
    desc: 'Données hébergées sur une infrastructure sécurisée (Google Firebase), échanges chiffrés (HTTPS). Nous ne vendons jamais vos données. Jamais.',
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
                Aujourd'hui, nous comptons plus de 200 partenaires clients et des milliers
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
