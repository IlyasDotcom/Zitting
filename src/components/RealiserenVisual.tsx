export default function RealiserenVisual() {
  const docker = [
    { num: '1', label: 'docker compose up', sub: 'Eén commando start alles' },
    { num: '2', label: 'Database start + healthcheck', sub: 'Backend wacht tot DB klaar is' },
    { num: '3', label: 'Auto-migrate', sub: 'Schema altijd up-to-date' },
    { num: '4', label: 'Backend + Frontend live', sub: 'Configureerbare backend-URL' },
  ];
  const quality = [
    { icon: '✏️', title: 'HeroSearch refactored', body: 'Component te groot geworden. Opgesplitst voor leesbaarheid en testbaarheid.' },
    { icon: '🗺️', title: 'Kaarten per gebied', body: 'Na feedback van Ruud en Margreet: resultaten per regio i.p.v. één totaal.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--petrol-base)' }}>Docker-flow</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {docker.map((step, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--petrol-base)', color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</span>
              <div><div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)' }}>{step.label}</div><div style={{ fontSize: '11px', color: 'var(--ink-muted)' }}>{step.sub}</div></div>
            </div>
            {i < docker.length - 1 && <div style={{ color: 'var(--ink-subtle)', fontSize: '13px', paddingLeft: '24px', lineHeight: 1 }}>↓</div>}
          </div>
        ))}
      </div>
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--purple-base)', marginTop: '4px' }}>Eigen werk herzien</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {quality.map((q, i) => (
          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--purple-base)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>{q.icon}</span>
            <div><div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '2px' }}>{q.title}</div><div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: 1.5 }}>{q.body}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
