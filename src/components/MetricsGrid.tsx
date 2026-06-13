export default function MetricsGrid() {
  const metrics = [
    { value: '✅', label: 'Code review: GO — 18 mei 2026' },
    { value: '432', label: 'Uur solo gewerkt' },
    { value: '7', label: 'Sprints voltooid' },
    { value: '22', label: 'xUnit-tests geschreven' },
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
