export default function ArchitectureFlow() {
  const layers = [
    { cls: 'frontend', icon: '🌐', name: 'Frontend', tech: 'React · Tags-component · AND/OR logica · Resultatenkaarten per regio' },
    { cls: 'api', icon: '⚙️', name: 'Backend – ASP.NET Core 8', tech: 'REST API · /count endpoint · Keyword + Branche + Regio filtering' },
    { cls: 'db', icon: '🗄️', name: 'Database – SQL Server', tech: 'Full-text search · Bedrijfsomschrijvingen & handelsnamen geïndexeerd' },
    { cls: 'infra', icon: '🐳', name: 'Infrastructure – Docker', tech: 'Containerized setup · Reproduceerbare lokale & CI omgeving' },
  ];
  return (
    <div className="arch-flow">
      {layers.map((layer, i) => (
        <div key={layer.cls}>
          <div className={`arch-layer arch-layer--${layer.cls}`} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="arch-layer__icon">{layer.icon}</div>
            <div className="arch-layer__content">
              <div className="arch-layer__name">{layer.name}</div>
              <div className="arch-layer__tech">{layer.tech}</div>
            </div>
          </div>
          {i < layers.length - 1 && <div className="arch-arrow">↓</div>}
        </div>
      ))}
    </div>
  );
}
