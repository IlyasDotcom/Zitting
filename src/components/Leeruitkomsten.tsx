export default function Leeruitkomsten() {
  const items = [
    { num: '1', title: 'Programmeren', body: 'Architectuurkeuze, koppeling met KVK-database, samengestelde query, boomstructuur-algoritme.', color: 'var(--petrol-base)' },
    { num: '2', title: 'Plannen van aanpassingen', body: '7 sprints, eigen DoD, bijsturing na onderschatting infrastructuur en tests.', color: 'var(--petrol-light)' },
    { num: '3', title: 'Realiseren en integreren', body: 'Docker, healthcheck, auto-migrate, refactoring na feedback, reproduceerbare omgeving.', color: 'var(--purple-base)' },
    { num: '4', title: 'Samenwerken en communiceren', body: 'Taal aanpassen per publiek. Technisch met developers, zonder jargon met business users.', color: 'var(--purple-dark)' },
    { num: '5', title: 'Een leven lang leren', body: 'De rode draad door alles heen. Trends volgen, feedback vertalen naar acties, eerlijke zelfevaluatie.', color: 'var(--petrol-darker)', highlight: true },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', alignContent: 'start' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          padding: '18px 20px', borderRadius: 'var(--radius-md)',
          background: item.highlight ? item.color : 'var(--surface-card)',
          border: item.highlight ? `2px solid ${item.color}` : '1px solid var(--border)',
          borderLeft: `4px solid ${item.color}`,
          boxShadow: 'var(--shadow-sm)',
          animation: 'cardIn 0.3s both', animationDelay: `${i * 0.07}s`,
          gridColumn: i === 4 ? 'span 3' : 'span 1',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: item.color, color: '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.num}</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: item.highlight ? '#fff' : 'var(--ink)' }}>{item.title}</span>
            {item.highlight && <span style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '10px' }}>Rode draad</span>}
          </div>
          <p style={{ fontSize: '12.5px', lineHeight: 1.55, color: item.highlight ? 'rgba(255,255,255,0.85)' : 'var(--ink-secondary)' }}>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
