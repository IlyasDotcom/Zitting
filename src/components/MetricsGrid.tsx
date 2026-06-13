export default function MetricsGrid() {
  const metrics = [
    { value: '✅', label: 'Code review: GO behaald' },
    { value: '4', label: 'Fasen doorlopen' },
    { value: 'POC', label: 'Volledig functionerend opgeleverd' },
    { value: '↺', label: 'Bewuste bijsturing in week 5' },
  ];
  return (
    <div className="metrics-grid">
      {metrics.map((m, i) => (
        <div key={i} className="metric-card" style={{ animationDelay: `${i * 0.07}s` }}>
          <div className="metric-card__value">{m.value}</div>
          <div className="metric-card__label">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
