import { SLIDES } from '../data/presentationData';

interface Props {
  current: number;
  onNavigate: (index: number) => void;
}

export default function Navigation({ current, onNavigate }: Props) {
  const sections = Array.from(new Map(SLIDES.map((s, i) => [s.section, i])).entries());
  return (
    <nav className="section-nav">
      {sections.map(([section, firstIndex]) => {
        const isActive = SLIDES[current].section === section;
        return (
          <button key={section} className={`section-nav__item ${isActive ? 'active' : ''}`} onClick={() => onNavigate(firstIndex)}>
            <span className="section-nav__dot" />
            {section}
          </button>
        );
      })}
    </nav>
  );
}
