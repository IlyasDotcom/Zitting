export default function LevenLangLeren() {
  const tiles = [
    { icon: '📅', title: 'Plannen', body: 'Kleinere taken. Vooraf inschatten wat ik onderschat.' },
    { icon: '🏗️', title: 'Kwaliteit', body: 'Uitlegbaar bouwen. Eerlijk zijn over wat nog niet af is.' },
    { icon: '🛡️', title: 'Security', body: 'Vanaf het ontwerp meedenken over risico’s en privacy.' },
    { icon: '🗣️', title: 'Communicatie', body: 'Eerst zelf proberen, dan gericht vragen.' },
    { icon: '🔄', title: 'Feedback', body: 'Actief ophalen en vertalen naar een concrete actie.' },
    { icon: '📈', title: 'Volgende stap', body: 'Sterker worden in backend, testen en betrouwbare software.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
      <div style={{
        padding: '16px 20px', borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, var(--petrol-base), var(--petrol-darker))',
        color: '#fff', boxShadow: 'var(--shadow-md)',
        animation: 'cardIn 0.3s both',
      }}>
        <p style={{ fontSize: 'clamp(13px, 1.8vw, 17px)', fontWeight: 700, lineHeight: 1.35, margin: 0 }}>
          "Deze stage heeft mij niet alleen leren programmeren, maar leren werken."
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', flex: 1 }}>
        {tiles.map((tile, i) => (
          <div key={i} style={{
            padding: '14px 16px', borderRadius: 'var(--radius-md)',
            background: 'var(--surface-card)', border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            animation: 'cardIn 0.3s both', animationDelay: `${(i + 1) * 0.06}s`,
          }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>{tile.icon}</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>{tile.title}</div>
            <div style={{ fontSize: '11.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{tile.body}</div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '12px 18px', borderRadius: 'var(--radius-md)',
        background: 'var(--purple-lighter)', border: '1px solid var(--border)',
        borderLeft: '4px solid var(--purple-base)',
        fontSize: '13px', fontWeight: 700, color: 'var(--purple-darker)',
        animation: 'cardIn 0.3s both', animationDelay: '0.48s',
      }}>
        "Dat neem ik mee — elke dag, en in elk volgend project."
      </div>
    </div>
  );
}
