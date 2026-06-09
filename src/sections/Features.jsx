const FEATURES = [
  {
    num: '01',
    title: 'GPS temps réel',
    desc: 'Suivez chaque véhicule en direct. Historiques de trajets, zones géographiques et alertes de périmètre instantanées.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </>
    )
  },
  {
    num: '02',
    title: 'Maintenance prédictive',
    desc: "Notre IA anticipe les pannes. Rappels intelligents, alertes critiques et historique des interventions centralisé.",
    icon: (
      <>
        <path d="M12 2v10l6 3" />
        <circle cx="12" cy="12" r="10" />
      </>
    )
  },
  {
    num: '03',
    title: 'Rapports intelligents',
    desc: 'Tableaux de bord personnalisables, exports PDF/Excel et insights automatisés pour vos décisions stratégiques.',
    icon: <path d="M3 3h18v18H3zM3 9h18M9 9v12" />
  },
  {
    num: '04',
    title: 'Gestion des conducteurs',
    desc: 'Profils, scores de conduite, attribution des véhicules et suivi des permis en temps réel.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    )
  },
  {
    num: '05',
    title: 'Suivi carburant & CO₂',
    desc: 'Consommation par véhicule, coût total de possession et bilan carbone. Économisez en moyenne 18%.',
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  },
  {
    num: '06',
    title: 'Multi-plateformes',
    desc: 'Web, iOS et Android. Synchronisation instantanée et mode hors-ligne complet sur tous vos écrans.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    )
  }
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title">
      <div className="wrap">
        <div className="center">
          <div className="tag fade-in">
            <span className="tag-dot" aria-hidden="true" />
            Fonctionnalités
          </div>
          <h2 id="features-title" className="fade-up">
            Tout ce qu'il vous faut,
            <br />
            <span className="gradient-text">en un seul endroit</span>
          </h2>
          <p className="sub fade-up d1">
            Conçu pour les particuliers avec 1 véhicule comme pour les pros
            gérant des centaines d'unités.
          </p>
        </div>

        <div className="features-grid" role="list">
          {FEATURES.map((f, i) => (
            <div
              className={`feat fade-up${i % 3 ? ` d${i % 3}` : ''}`}
              role="listitem"
              key={f.num}
            >
              <div className="feat-num">{`// ${f.num}`}</div>
              <div className="feat-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
