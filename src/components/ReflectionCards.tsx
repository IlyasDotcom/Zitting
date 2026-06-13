export default function ReflectionCards() {
  const items = [
    { icon: '✅', title: 'Wat goed ging', body: 'Snel een werkend product geleverd. Scopebewaking was sterk. Technische keuzes goed onderbouwd. Zelfstandig gewerkt met hulp op de juiste momenten gezocht.' },
    { icon: '⚠️', title: 'Wat minder goed ging', body: 'Logboek niet real-time bijgehouden – achteraf gereconstrueerd. Te laat gestart met feature branches. Minder diepgang opgedaan in de niet-technische kant van KVK.' },
    { icon: '🔄', title: 'Wat ik anders zou doen', body: "Dagelijks logboek bijhouden als vaste routine. Vanaf dag 1 feature branches gebruiken. Meer gesprekken voeren met niet-technische collega's." },
    { icon: '🌱', title: 'Professionele groei', body: 'Ik evalueer mijn werk eerlijker: niet alleen wat er mist, maar ook wat werkt en wat ik kan uitleggen. Documentatie is net zo belangrijk als code.' },
  ];
  return (
    <div className="reflection-grid">
      {items.map((item, i) => (
        <div key={i} className="reflection-card" style={{ animationDelay: `${i * 0.08}s` }}>
          <span className="reflection-card__icon">{item.icon}</span>
          <div className="reflection-card__content">
            <div className="reflection-card__title">{item.title}</div>
            <div className="reflection-card__body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
