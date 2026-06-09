import { Stars } from '../components/Icons.jsx';

const TESTIS = [
  {
    quote:
      "« Mobili a transformé nos 45 véhicules de livraison. Réduction des coûts carburant de 22% en 3 mois. L'interface est intuitive et les rapports sont excellents. »",
    name: 'Marc Aubert',
    role: 'Directeur logistique — TransEco SAS',
    initials: 'MA',
    avStyle: { background: 'rgba(0,112,243,0.2)', color: '#60a5fa' }
  },
  {
    quote:
      "« En tant que particulier avec 2 voitures familiales, j'avais besoin d'un outil simple mais puissant. Mobili m'alerte pour les révisions et me donne une vision claire de mes dépenses. »",
    name: 'Sophie Laurent',
    role: 'Particulière — Lyon',
    initials: 'SL',
    avStyle: { background: 'rgba(0,230,118,0.15)', color: '#00E676' }
  },
  {
    quote:
      '« Le module de maintenance prédictive nous a évité 3 pannes majeures sur notre parc de 120 véhicules. ROI évident dès la première semaine. »',
    name: 'Thomas Deschamps',
    role: 'Fleet Manager — BTP Services Groupe',
    initials: 'TD',
    avStyle: { background: 'rgba(251,191,36,0.15)', color: '#FBB924' }
  }
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testi-title">
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Témoignages
          </div>
          <h2 id="testi-title" className="fade-up">
            Ils ont transformé
            <br />
            <span className="gradient-text">leur gestion de flotte</span>
          </h2>
        </div>

        <div className="testimonials-grid" role="list">
          {TESTIS.map((t, i) => (
            <div className={`testi glass fade-up${i ? ` d${i}` : ''}`} role="listitem" key={t.name}>
              <div className="testi-stars">
                <Stars />
              </div>
              <p>{t.quote}</p>
              <div className="testi-author">
                <div className="testi-av" style={t.avStyle} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
