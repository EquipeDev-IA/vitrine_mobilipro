import { useEffect, useRef } from 'react';

const STATS = [
  { num: '1000+', label: 'Véhicules gérés' },
  { num: '200+', label: 'Partenaires clients' },
  { num: '99.9%', label: 'Disponibilité SLA' },
  { num: '−18%', label: 'Économie carburant moy.' }
];

export default function StatsBand() {
  const bandRef = useRef(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(band);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(band);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stats-band" role="region" aria-label="Chiffres clés" ref={bandRef}>
      <div className="wrap">
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <div className={`stat-item fade-up${i ? ` d${i}` : ''}`} key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function animate(root) {
  root.querySelectorAll('.stat-num').forEach((el) => {
    const text = el.textContent;
    const num = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return;
    const prefix = text.match(/^[^0-9]*/)?.[0] || '';
    const suffix = text.match(/[^0-9.]+$/)?.[0] || '';
    let start = 0;
    const dur = 1600;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      const val = num < 10 ? (num * ease).toFixed(1) : Math.floor(num * ease);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = text;
    };
    requestAnimationFrame(step);
  });
}
