export default function BijsturenOnderDruk() {
  const moments = [
    {
      label: 'Moment 1 — week 6–7',
      title: 'Scope-druk',
      situation: 'Nieuwe wensen terwijl ik midden in de trefwoordenlogica zat.',
      action: 'Prioriteitenmatrix opgesteld. Grens bespreekbaar gemaakt in de donderdagmeeting: eerst kern af, dan extra\'s.',
      effect: 'Nieuwe wensen werden follow-up punten. Kernfunctionaliteit af voor einde sprint.',
      color: 'var(--purple-base)',
    },
    {
      label: 'Moment 2 — week 11',
      title: 'Code review-druk',
      situation: 'Bang dat ik mijn keuzes niet helder kon uitleggen voor de code review.',
      action: 'Praatblokken gemaakt per onderdeel. Mogelijke vragen opgeschreven. Afgestemd met Ben en Waseem via Teams.',
      effect: 'Rustiger kunnen presenteren. Code review eindigde met GO.',
      color: 'var(--petrol-base)',
    },
    {
      label: 'Moment 3 — kwaliteit',
      title: 'Eigen werk herzien',
      situation: 'HeroSearch-component was te groot geworden en moeilijk te testen.',
      action: 'Component opgesplitst in kleinere delen. Na demo met users: resultaten per gebied getoond.',
      effect: 'Betere leesbaarheid, testbaarheid en bruikbaarheid.',
      color: 'var(--petrol-base)',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {moments.map((m, i) => (
        <div key={i} style={{
          padding: '18px 20px', borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card)', border: '1px solid var(--border)',
          borderLeft: `4px solid ${m.color}`,
          boxShadow: 'var(--shadow-sm)',
          animation: 'cardIn 0.3s both', animationDelay: `${i * 0.1}s`,
        }}>
          <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: m.color, marginBottom: '4px' }}>
            {m.label}
          </div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>{m.title}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {[
              { key: 'Situatie', val: m.situation },
              { key: 'Aanpak', val: m.action },
              { key: 'Effect', val: m.effect },
            ].map((col, j) => (
              <div key={j} style={{ padding: '10px 12px', background: 'var(--surface-alt)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '4px' }}>{col.key}</div>
                <div style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{col.val}</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{
        padding: '14px 20px', borderRadius: 'var(--radius-md)',
        background: 'var(--petrol-lighter)', border: '1px solid var(--border)',
        fontSize: '13px', fontWeight: 600, color: 'var(--petrol-darker)',
        textAlign: 'center',
        animation: 'cardIn 0.3s both', animationDelay: '0.2s',
      }}>
        "Bij druk helpt het mij niet om harder te werken, maar om te structureren en mijn uitleg voor te bereiden."
      </div>
    </div>
  );
}
