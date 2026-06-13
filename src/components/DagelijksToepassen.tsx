export default function DagelijksToepassen() {
  const tiles = [
    { icon: '📅', title: 'Plannen', body: 'Kleinere taken. Vooraf inschatten wat ik onderschat. Korte retro\'s na elke sprint.' },
    { icon: '🏗️', title: 'Kwaliteit', body: 'Uitlegbaar bouwen. Eerlijk zijn over wat nog niet af of getest is.' },
    { icon: '🛡️', title: 'Security', body: 'Vanaf het ontwerp meedenken over risico\'s en privacy-impact van wat ik toon.' },
    { icon: '🗣️', title: 'Communicatie', body: 'Eerst zelf proberen, dan gericht vragen mét wat ik al heb gedaan.' },
    { icon: '🔄', title: 'Feedback', body: 'Actief ophalen en direct vertalen naar een concrete actie.' },
    { icon: '🌱', title: 'Reflectie', body: 'Voortgang eerlijk beoordelen — ook zien wat al werkt, niet alleen wat ontbreekt.' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', alignContent: 'start' }}>
      {tiles.map((tile, i) => (
        <div key={i} style={{ padding: '18px 20px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', animation: 'cardIn 0.3s both', animationDelay: `${i * 0.06}s` }}>
          <div style={{ fontSize: '22px', marginBottom: '8px' }}>{tile.icon}</div>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>{tile.title}</div>
          <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>{tile.body}</div>
        </div>
      ))}
    </div>
  );
}
