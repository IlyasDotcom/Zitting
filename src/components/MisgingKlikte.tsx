export default function MisgingKlikte() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100%' }}>
      <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--warning)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '12px', animation: 'cardIn 0.3s both' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--warning)' }}>Toen het misging — week 3–4</div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>EF Core-blokkade</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Situatie', body: 'Drie dagen vast op dezelfde EF Core-fout bij de koppeling met de KVK-database.' },
            { label: 'Valkuil', body: 'Te lang zelf blijven zoeken. Hetzelfde opnieuw proberen in de hoop op een andere uitkomst.' },
            { label: 'Aanpak', body: 'Gestopt. Databaseschema uitgetekend op papier. Voorgelegd aan Waseem Sadiq.' },
            { label: 'Effect', body: 'Volgende dag opgelost.' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.4px', textTransform: 'uppercase', color: 'var(--ink-muted)', minWidth: '64px', paddingTop: '2px', flexShrink: 0 }}>{row.label}</span>
              <span style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{row.body}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '20px', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--success)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: '12px', animation: 'cardIn 0.3s both', animationDelay: '0.08s' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--success)' }}>Toen het klikte — 23 april</div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>Demo aan Ceyhun</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Situatie', body: 'Onzeker omdat bestanden groot waren en niet “perfect” opgesplitst.' },
            { label: 'Valkuil', body: 'Perfectionisme. Eindeloos opsplitsen zonder dat het iets oploste.' },
            { label: 'Kantelpunt', body: 'Ceyhun: “In een POC mag een groter bestand, als je je keuzes kunt uitleggen.”' },
            { label: 'Effect', body: 'Vanaf toen: gericht op uitleggen in plaats van eindeloos opsplitsen.' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.4px', textTransform: 'uppercase', color: 'var(--ink-muted)', minWidth: '72px', paddingTop: '2px', flexShrink: 0 }}>{row.label}</span>
              <span style={{ fontSize: '12.5px', color: 'var(--ink-secondary)', lineHeight: 1.55 }}>{row.body}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ gridColumn: 'span 2', padding: '14px 20px', borderRadius: 'var(--radius-md)', background: 'var(--petrol-lighter)', border: '1px solid var(--border)', fontSize: '13px', fontWeight: 600, color: 'var(--petrol-darker)', textAlign: 'center', animation: 'cardIn 0.3s both', animationDelay: '0.16s' }}>
        „Allebei leerden me hetzelfde: eerder schakelen en realistisch zijn over goed genoeg.“
      </div>
    </div>
  );
}
