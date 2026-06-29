import { useNavigate } from 'react-router-dom';
import Particles from '../components/Particles.jsx';
import { Stars, ArrowUpRight, PlayIcon } from '../components/Icons.jsx';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <Particles />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-line" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-rating fade-in">
          <Stars />
          <span>4,9 · Ils nous font confiance</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Google">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        </div>

        <h1 id="hero-title" className="fade-up d1">
          Prenez le contrôle
          <br />
          de <span className="gradient-text">votre flotte</span>
        </h1>
        <p className="sub fade-up d2">
          Mobili offre une expérience fluide et sécurisée pour gérer vos
          véhicules. Suivi en temps réel, maintenance prédictive et analyses
          premium.
        </p>
        <div className="hero-actions fade-up d3">
          <a
            href="/contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
          >
            Démarrer gratuitement
            <ArrowUpRight />
          </a>
          <a
            href="/contact"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              navigate('/contact');
            }}
          >
            <PlayIcon />
            Voir la démo
          </a>
        </div>
        <div className="hero-trust fade-up d4">
          <span>Ils nous font confiance</span>
          <div className="trust-logos" aria-label="Clients de confiance">
            <div className="trust-logo">TRANSECO</div>
            <div className="trust-logo">BTP GROUP</div>
            <div className="trust-logo">LOGISTIX</div>
            <div className="trust-logo">MOOVPRO</div>
          </div>
        </div>
      </div>

      <HeroMockup />
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="hero-mockup scale-in d5">
      <div className="mockup-wrapper">
        <div className="mockup-glow" aria-hidden="true" />
        <div
          className="mockup-window"
          role="img"
          aria-label="Aperçu du tableau de bord Mobili"
        >
          <div className="mockup-bar">
            <div className="mockup-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="mockup-url">app.mobili.fr / dashboard</div>
            <div style={{ width: 60 }} />
          </div>
          <div className="mockup-body">
            <div className="mock-sidebar">
              <div className="mock-logo" aria-hidden="true">
                <div className="mock-logo-dot" />
                <span className="mock-logo-text">Mobili</span>
              </div>
              <div className="mock-nav-item active">
                <div className="mock-nav-dot green" />
                Dashboard
              </div>
              <div className="mock-nav-item">
                <div className="mock-nav-dot" />
                Véhicules
              </div>
              <div className="mock-nav-item">
                <div className="mock-nav-dot" />
                Conducteurs
              </div>
              <div className="mock-nav-item">
                <div className="mock-nav-dot" />
                Maintenance
              </div>
              <div className="mock-nav-item">
                <div className="mock-nav-dot" />
                Rapports
              </div>
              <div className="mock-nav-item" style={{ marginTop: 'auto' }}>
                <div className="mock-nav-dot" />
                Paramètres
              </div>
            </div>

            <div className="mock-main">
              <div className="mock-header">
                <div>
                  <div className="mock-title">Tableau de bord principal</div>
                  <div className="mock-subtitle">
                    Flotte / Dashboard · Vue temps réel
                  </div>
                </div>
                <div className="mock-search">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  Rechercher...
                </div>
              </div>

              <div className="mock-balance-card">
                <div className="mock-balance-label">Score de flotte global</div>
                <div className="mock-balance-val">
                  94,3{' '}
                  <span style={{ fontSize: '.9rem', color: 'var(--green)' }}>
                    / 100
                  </span>
                </div>
                <div className="mock-balance-sub">+4,7 pts vs mois dernier</div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '.68rem', color: 'var(--dim)' }}>
                  Activité des véhicules
                </span>
                <div className="mock-tabs">
                  <div className="mock-tab">7J</div>
                  <div className="mock-tab">1M</div>
                  <div className="mock-tab active">3M</div>
                  <div className="mock-tab">1A</div>
                </div>
              </div>

              <div className="mock-chart" role="img" aria-label="Graphique d'activité">
                {[
                  { h: 40 }, { h: 55 }, { h: 45 }, { h: 65 },
                  { h: 50 }, { h: 75 }, { h: 60 }, { h: 85, hi: true },
                  { h: 70 }, { h: 90, hi: true }, { h: 78 }, { h: 95, hi: true }
                ].map((b, i) => (
                  <div
                    key={i}
                    className={`mock-bar${b.hi ? ' hi' : ''}`}
                    style={{ height: `${b.h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mock-right">
              <div className="mock-panel-title">Statut flotte</div>
              <div className="mock-stat-row">
                <span className="mock-stat-label">Véhicules actifs</span>
                <span className="mock-stat-val green">8 / 12</span>
              </div>
              <div className="mock-stat-row">
                <span className="mock-stat-label">Alertes maintenance</span>
                <span className="mock-stat-val" style={{ color: '#FFB800' }}>2</span>
              </div>
              <div className="mock-stat-row">
                <span className="mock-stat-label">Éco carburant</span>
                <span className="mock-stat-val green">−18%</span>
              </div>
              <div className="mock-stat-row">
                <span className="mock-stat-label">Score conduite</span>
                <span className="mock-stat-val green">91/100</span>
              </div>
              <div className="mock-panel-title" style={{ marginTop: 4 }}>
                Localisation
              </div>
              <div className="mock-map" role="img" aria-label="Carte GPS">
                <div className="mock-map-grid" aria-hidden="true" />
                <div className="mock-dot" style={{ top: '28%', left: '35%' }} aria-hidden="true" />
                <div className="mock-dot mock-dot-2" aria-hidden="true" />
                <div className="mock-dot mock-dot-3" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="mockup-fade" aria-hidden="true" />
      </div>
    </div>
  );
}
