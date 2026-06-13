import { useState } from 'react';
import { QA_ITEMS } from '../data/presentationData';

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Alle');

  const categories = ['Alle', ...Array.from(new Set(QA_ITEMS.map(q => q.category)))];
  const filtered = activeCategory === 'Alle' ? QA_ITEMS : QA_ITEMS.filter(q => q.category === activeCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="qa-filters">
        {categories.map(cat => (
          <button key={cat} className={`qa-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}>
            {cat}
          </button>
        ))}
      </div>
      <div className="qa-grid" style={{ overflowY: 'auto', flex: 1 }}>
        {filtered.map((item, i) => (
          <div key={i} className={`qa-item ${openIndex === i ? 'qa-item--open' : ''}`}>
            <div className="qa-item__question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className="qa-item__q-icon">V</span>
              <span className="qa-item__q-text">{item.question}</span>
              <span className="qa-item__category">{item.category}</span>
              <span className="qa-item__chevron">{openIndex === i ? '▲' : '▼'}</span>
            </div>
            {openIndex === i && <div className="qa-item__answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
