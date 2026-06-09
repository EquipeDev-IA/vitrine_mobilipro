import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from '../components/Icons.jsx';

export default function CTABanner() {
  const navigate = useNavigate();
  const goContact = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <section style={{ paddingBottom: 120 }}>
      <div className="wrap">
        <div className="cta-banner scale-in" role="banner">
          <div className="tag" style={{ marginBottom: 24 }}>
            <span className="tag-dot" aria-hidden="true" />
            Prêt à démarrer ?
          </div>
          <h2>
            Transformez votre façon
            <br />
            de <span className="gradient-text">gérer vos véhicules</span>
          </h2>
          <p>
            14 jours d'essai gratuit · Configuration en 5 minutes · Aucune carte
            bancaire
          </p>
          <div className="cta-acts">
            <a href="/contact" className="btn-primary" onClick={goContact}>
              Démarrer gratuitement
              <ArrowUpRight size={15} />
            </a>
            <a href="/contact" className="btn-outline" onClick={goContact}>
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
