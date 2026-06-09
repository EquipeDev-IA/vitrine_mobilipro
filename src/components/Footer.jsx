import { useNavigate, useLocation } from 'react-router-dom';
import { LogoMark } from './Icons.jsx';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToFeatures = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'features' } });
    }
  };

  const goTo = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  const noop = (e) => e.preventDefault();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon" aria-hidden="true">
                <LogoMark />
              </div>
              Mobili
            </div>
            <p>
              La plateforme de gestion de flotte intelligente pour les
              particuliers et les professionnels. Sécurisée, fiable, intuitive.
            </p>
          </div>

          <div className="footer-col">
            <h4>Produit</h4>
            <ul>
              <li><a href="/" onClick={goTo('/')}>Accueil</a></li>
              <li><a href="#features" onClick={goToFeatures}>Fonctionnalités</a></li>
              <li><a href="#" onClick={noop}>Nouveautés</a></li>
              <li><a href="#" onClick={noop}>Roadmap</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="/about" onClick={goTo('/about')}>À propos</a></li>
              <li><a href="#" onClick={noop}>Blog</a></li>
              <li><a href="#" onClick={noop}>Carrières</a></li>
              <li><a href="/contact" onClick={goTo('/contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#" onClick={noop}>Documentation</a></li>
              <li><a href="#" onClick={noop}>API</a></li>
              <li><a href="#" onClick={noop}>Centre d'aide</a></li>
              <li><a href="#" onClick={noop}>Statut</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Mobili. Tous droits réservés.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" onClick={noop}>Confidentialité</a>
            <a href="#" onClick={noop}>CGU</a>
            <a href="#" onClick={noop}>Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
