export default function FeedbackCards() {
  const cards = [
    { type: 'positive' as const, tag: 'Positieve feedback', title: 'Professioneel & waardevol product', body: '"Er is een werkend product opgeleverd dat er professioneel uitziet en absoluut waardevol is voor KVK." — Ben Schuttenbeld' },
    { type: 'positive' as const, tag: 'Positieve feedback', title: 'Scopebewaking en zelfstandigheid', body: 'Ik heb consequent de kern eerst werkend gemaakt voordat ik uitbreidde. Dit werd gewaardeerd als professioneel oordeelsvermogen.' },
    { type: 'negative' as const, tag: 'Kritische feedback', title: 'Logboek niet real-time bijgehouden', body: 'Het logboek was gedeeltelijk gereconstrueerd achteraf. Een dagelijks bijgehouden logboek was beter geweest.' },
    { type: 'negative' as const, tag: 'Kritische feedback', title: 'Versioning – te laat feature branches', body: 'Ik begon met direct committen op main. Pas later ben ik overgestapt op feature branches. Dit was een leermoment.' },
    { type: 'action' as const, tag: 'Actie genomen', title: 'Logboek gereconstrueerd', body: 'Via Git commit history en notities heb ik het logboek alsnog compleet gemaakt.' },
    { type: 'action' as const, tag: 'Actie genomen', title: 'Feature branches ingevoerd', body: 'Na erkenning van het probleem direct gecorrigeerd. Resterende sprints werkte ik met feature branches.' },
  ];
  return (
    <div className="feedback-grid">
      {cards.map((card, i) => (
        <div key={i} className={`feedback-card feedback-card--${card.type}`} style={{ animationDelay: `${i * 0.07}s` }}>
          <span className="feedback-card__tag">{card.tag}</span>
          <div className="feedback-card__title">{card.title}</div>
          <div className="feedback-card__body">{card.body}</div>
        </div>
      ))}
    </div>
  );
}
