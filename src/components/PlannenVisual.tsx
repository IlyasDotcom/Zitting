import { TIMELINE_ITEMS } from '../data/presentationData';

export default function PlannenVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', height: '100%', overflowY: 'auto' }}>
      <div className="timeline">
        {TIMELINE_ITEMS.map((item, i) => (
          <div key={i} className={`timeline-item timeline-item--${item.status}`}>
            <div className="timeline-item__dot" />
            <div className="timeline-item__header">
              <span className="timeline-item__phase">{item.phase}</span>
              <span className="timeline-item__label">{item.label}</span>
              <span className="timeline-item__weeks">{item.weeks}</span>
            </div>
            <div className="timeline-item__items">
              {item.items.map((bullet, j) => (
                <div key={j} className="timeline-item__bullet">{bullet}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--ink-subtle)', fontStyle: 'italic', paddingLeft: '2px' }}>
        Overdrachtsdocument gemaakt op basis van PvA en projectdocumentatie.
      </div>
    </div>
  );
}
