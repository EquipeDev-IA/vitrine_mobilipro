const STEPS = [
  { n: '01', title: 'Créez votre espace', desc: "Inscription en 30 secondes. Aucune carte bancaire pour l'essai gratuit." },
  { n: '02', title: 'Ajoutez vos véhicules', desc: 'Import CSV ou ajout manuel. Connectez vos boîtiers GPS existants.' },
  { n: '03', title: 'Configurez vos alertes', desc: 'Maintenance, conduite, zones géographiques et consommation.' },
  { n: '04', title: 'Pilotez en direct', desc: 'Votre flotte sous contrôle total, partout et à tout moment.' }
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="steps-title">
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Comment ça marche
          </div>
          <h2 id="steps-title" className="fade-up">
            Opérationnel en <span className="gradient-text">5 minutes</span>
          </h2>
          <p className="sub fade-up d1">
            Aucune installation requise. Configuration simple, résultats immédiats.
          </p>
        </div>

        <div className="steps-grid" role="list">
          {STEPS.map((s, i) => (
            <div className={`step glass fade-up${i ? ` d${i}` : ''}`} role="listitem" key={s.n}>
              {i < STEPS.length - 1 && <div className="step-line" aria-hidden="true" />}
              <div className="step-num" aria-label={`Étape ${i + 1}`}>{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
