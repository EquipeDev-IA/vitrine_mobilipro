import { useMemo } from 'react';

export default function Particles({ count = 18 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, () => {
        const size = Math.random() * 3 + 1;
        return {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 12 + 8}s`,
          animationDelay: `-${Math.random() * 15}s`
        };
      }),
    [count]
  );

  return (
    <div className="particles" aria-hidden="true">
      {items.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </div>
  );
}
