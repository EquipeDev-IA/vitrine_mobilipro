import { Stars } from '../components/Icons.jsx';

const TESTIS = [
  {
    quote:
      "« J'utilise Mobili pour mes 2 voitures familiales. L'application m'alerte avant chaque révision et me donne une vision claire de mes dépenses. Un vrai gain de tranquillité. »",
    name: 'Sophie Laurent',
    role: 'Particulière — Lyon, France',
    initials: 'SL',
    avStyle: { background: 'rgba(0,230,118,0.15)', color: '#00E676' }
  },
  {
    quote:
      "« As a busy parent with three cars in the household, Mobili keeps everything organized. Maintenance reminders, fuel tracking, GPS — it's the dashboard I always wished I had. »",
    name: 'Michael Carter',
    role: 'Particulier — Miami, États-Unis',
    initials: 'MC',
    avStyle: { background: 'rgba(0,112,243,0.2)', color: '#60a5fa' }
  },
  {
    quote:
      "« Sur l'île, l'entretien d'une voiture peut vite coûter cher. Avec Mobili je suis tout : carburant, kilométrage, factures. J'ai réduit mes frais d'environ 20% en 6 mois. »",
    name: 'Aurélie Joseph',
    role: 'Particulière — Fort-de-France, Martinique',
    initials: 'AJ',
    avStyle: { background: 'rgba(251,191,36,0.15)', color: '#FBB924' }
  },
  {
    quote:
      "« À Abidjan, les trajets et le suivi de mon véhicule étaient un casse-tête. Mobili m'aide à anticiper les pannes et à mieux gérer mon budget auto. Indispensable au quotidien. »",
    name: "Kouadio N'Guessan",
    role: "Particulier — Abidjan, Côte d'Ivoire",
    initials: 'KN',
    avStyle: { background: 'rgba(167,139,250,0.18)', color: '#a78bfa' }
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
