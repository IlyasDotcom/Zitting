export default function ProgrammerenVisual() {
  const arch = [
    { cls: 'frontend', icon: '🌐', name: 'Controller', tech: 'HTTP-verzoek ontvangen · input valideren · response teruggeven' },
    { cls: 'api', icon: '⚙️', name: 'Service', tech: 'Businesslogica · AND/OR-operator · boomstructuur-algoritme · debounce' },
    { cls: 'db', icon: '🗄️', name: 'Repository', tech: 'EF Core · Fluent API voor kolomnamen · samengestelde LINQ-query' },
    { cls: 'infra', icon: '💾', name: 'SQL Server', tech: 'Full-text search · branche + gebied + tekst + actief-status' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%', justifyContent: 'center' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--petrol-base)', marginBottom: '4px' }}>Controller · Service · Repository</div>
      {arch.map((layer, i) => (
        <div key={layer.cls}>
          <div className={`arch-layer arch-layer--${layer.cls}`} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="arch-layer__icon">{layer.icon}</div>
            <div className="arch-layer__content">
              <div className="arch-layer__name">{layer.name}</div>
              <div className="arch-layer__tech">{layer.tech}</div>
            </div>
          </div>
          {i < arch.length - 1 && <div className="arch-arrow">↓</div>}
        </div>
      ))}
      <div style={{ marginTop: '8px', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--petrol-lighter)', border: '1px solid var(--border)', fontSize: '12px', color: 'var(--petrol-darker)', animation: 'cardIn 0.3s both', animationDelay: '0.32s' }}>
        <strong>Zelfstandige keuze:</strong> Eerst uitlegbaar, dan optimaliseren. Nieuwe techniek verifiëren in officiële docs.
      </div>
    </div>
  );
}
