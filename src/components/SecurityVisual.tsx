export default function SecurityVisual() {
  const items = [
    { icon: '🔒', label: 'Inputvalidatie', detail: 'Geen onveilige invoer mogelijk. Rate limiting toegepast.' },
    { icon: '🔑', label: 'Security headers', detail: 'Geconfigureerd via Nginx. Secrets in omgevingsvariabelen.' },
    { icon: '🔐', label: 'Alleen tellingen, geen bedrijfsrecords', detail: 'Bewust beperkt om privacy te waarborgen.' },
    { icon: '🌱', label: 'Wat ik meeneem', detail: 'Security meenemen vanaf het begin, niet achteraf.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%', justifyContent: 'center' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex', gap: '14px', alignItems: 'flex-start',
          padding: '14px 18px', borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card)', border: '1px solid var(--border)',
          borderLeft: i === items.length - 1 ? '4px solid var(--petrol-base)' : '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
          animation: 'cardIn 0.3s both', animationDelay: `${i * 0.07}s`,
        }}>
          <span style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', marginBottom: '3px' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
