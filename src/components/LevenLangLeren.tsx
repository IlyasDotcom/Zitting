export default function LevenLangLeren() {
  const points = [
    { icon: '📋', body: 'Ik plan realistischer en stuur eerder bij.' },
    { icon: '🏗️', body: 'Ik bouw uitlegbaar en ben eerlijk over wat nog niet af is.' },
    { icon: '🛡️', body: 'Ik denk vanaf het begin na over security en privacy.' },
    { icon: '🔄', body: 'Ik haal actief feedback op en zet het om in acties.' },
    { icon: '📈', body: 'Ik volg trends van LIKE naar full text search naar semantisch/vector zoeken. Gebaseerd op Microsoft-documentatie over full text search en publicaties over vector-zoeken zoals Azure Cognitive Search en OpenAI embeddings. Dit lost de woordvariant-uitdaging (kapper vs barber) op en is een concrete volgende stap voor KVK.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* Opening */}
      <div style={{
        padding: '20px 24px', borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, var(--petrol-base), var(--petrol-darker))',
        color: '#fff', boxShadow: 'var(--shadow-md)',
        animation: 'cardIn 0.3s both',
      }}>
        <p style={{ fontSize: 'clamp(15px, 2vw, 19px)', fontWeight: 700, lineHeight: 1.35 }}>
          "Deze stage heeft mij niet alleen leren programmeren, maar leren werken."
        </p>
      </div>

      {/* Points */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        {points.map((p, i) => (
          <div key={i} style={{
            display: 'flex', gap: '14px', alignItems: 'flex-start',
            padding: '12px 16px', borderRadius: 'var(--radius-md)',
            background: 'var(--surface-card)', border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            animation: 'cardIn 0.3s both', animationDelay: `${(i + 1) * 0.07}s`,
          }}>
            <span style={{ fontSize: '18px', flexShrink: 0 }}>{p.icon}</span>
            <span style={{ fontSize: '13px', color: 'var(--ink-secondary)', lineHeight: 1.6 }}>{p.body}</span>
          </div>
        ))}
      </div>

      {/* Afsluiter */}
      <div style={{
        padding: '14px 20px', borderRadius: 'var(--radius-md)',
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
