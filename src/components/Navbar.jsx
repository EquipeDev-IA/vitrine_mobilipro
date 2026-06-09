import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogoMark } from './Icons.jsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToFeatures = () => {
    setMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: 'features' } });
    }
  };

  const go = (path) => () => {
    setMenuOpen(false);
    navigate(path);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav id="mainNav" role="navigation" aria-label="Navigation principale">
        <div className="logo">
          <div className="logo-icon" aria-hidden="true">
            <LogoMark />
          </div>
          Mobili
        </div>

        <div className="nav-links" role="menubar">
          <button
            onClick={go('/')}
            className={isActive('/') ? 'active' : ''}
            role="menuitem"
          >
            Pourquoi Mobili ?
          </button>
          <button onClick={goToFeatures} role="menuitem">
            Fonctionnalités
          </button>
          <button
            onClick={go('/about')}
            className={isActive('/about') ? 'active' : ''}
            role="menuitem"
          >
            À propos
          </button>
        </div>

        <div className="nav-right">
          <button className="btn-login" onClick={go('/contact')}>
            Connexion
          </button>
          <button className="btn-create" onClick={go('/contact')}>
            Créer un compte
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        <button onClick={go('/')} className={isActive('/') ? 'active' : ''}>
          Accueil
        </button>
        <button onClick={goToFeatures}>Fonctionnalités</button>
        <button onClick={go('/about')} className={isActive('/about') ? 'active' : ''}>
          À propos
        </button>
        <button onClick={go('/contact')} className={isActive('/contact') ? 'active' : ''}>
          Contact
        </button>
        <button
          className="btn-create"
          style={{ marginTop: 8, borderRadius: 999, padding: 12 }}
          onClick={go('/contact')}
        >
          Créer un compte
        </button>
      </div>
    </>
  );
}
