export default function SecurityVisual() {
  const items = [
    { icon: '🛡️', label: 'OWASP Top 10', detail: 'A03 Injection + A05 Misconfiguration gericht aangepakt als kader.' },
    { icon: '🔒', label: 'Inputvalidatie', detail: 'Parameterized LINQ-queries. Geen string-concatenatie. Rate limiting: 100/60s. Request body-limiet.' },
    { icon: '🔑', label: 'Configuratie', detail: 'Secrets in omgevingsvariabelen. CORS beperkt tot frontend-URL. Global exception handler — geen stack traces.' },
    { icon: '🌐', label: 'Headers via Nginx', detail: 'Security headers + Content Security Policy geconfigureerd op infrastructuurniveau.' },
    { icon: '🔐', label: 'Privacy by design', detail: 'Alleen tellingen tonen, geen bedrijfsrecords. Beperkt indirecte herleidbaarheid.' },
    { icon: '🌱', label: 'Wat ik meeneem', detail: 'Security is geen sluitstuk. Altijd nadenken over privacy-impact van wat je toont.', accent: true },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', borderLeft: item.accent ? '4px solid var(--petrol-base)' : '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', animation: 'cardIn 0.3s both', animationDelay: `${i * 0.06}s` }}>
          <span style={{ fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', marginBottom: '2px' }}>{item.label}</div>
            <div style={{ fontSize: '12px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{item.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
