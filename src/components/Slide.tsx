import { Slide as SlideType, PRESENTER } from '../data/presentationData';
import ArchitectureFlow from './ArchitectureFlow';
import FlowDiagram from './FlowDiagram';
import Timeline from './Timeline';
import TestMatrix from './TestMatrix';
import FeedbackCards from './FeedbackCards';
import ReflectionCards from './ReflectionCards';
import MetricsGrid from './MetricsGrid';
import Leeruitkomsten from './Leeruitkomsten';
import MisgingKlikte from './MisgingKlikte';
import BijsturenOnderDruk from './BijsturenOnderDruk';
import DagelijksToepassen from './DagelijksToepassen';
import LevenLangLeren from './LevenLangLeren';
import SecurityVisual from './SecurityVisual';
import RealiserenVisual from './RealiserenVisual';
import PlannenVisual from './PlannenVisual';
import ProgrammerenVisual from './ProgrammerenVisual';

interface Props {
  slide: SlideType;
  direction: 'forward' | 'backward';
}

function VisualPanel({ type }: { type: SlideType['visual']['type'] }) {
  switch (type) {
    case 'architecture': return <ArchitectureFlow />;
    case 'flowdiagram': return <FlowDiagram />;
    case 'timeline': return <Timeline />;
    case 'testmatrix': return <TestMatrix />;
    case 'feedbackcards': return <FeedbackCards />;
    case 'reflectioncards': return <ReflectionCards />;
    case 'metrics': return <MetricsGrid />;
    case 'leeruitkomsten': return <Leeruitkomsten />;
    case 'misging': return <MisgingKlikte />;
    case 'bijsturen': return <BijsturenOnderDruk />;
    case 'dagelijkstoepassen': return <DagelijksToepassen />;
    case 'levenlangleren': return <LevenLangLeren />;
    case 'security': return <SecurityVisual />;
    case 'realiseren': return <RealiserenVisual />;
    case 'plannen': return <PlannenVisual />;
    case 'programmeren': return <ProgrammerenVisual />;
    default: return null;
  }
}

const FULL_VISUAL_IDS = new Set(['leeruitkomsten', 'misging', 'bijsturen', 'dagelijks', 'levenlangleren']);

function IntroSlide() {
  return (
    <div className="intro-slide">
      <div className="intro-slide__badge"><span>🏙️</span>Afstudeerverdediging {PRESENTER.year}</div>
      <div className="intro-slide__logo-ring">🏢</div>
      <div>
        <h1 className="intro-slide__title">KvK <span>Bedrijventeller</span></h1>
        <p className="intro-slide__project">Keyword Search — Proof of Concept</p>
      </div>
      <div className="intro-slide__meta">
        <div className="meta-chip"><span className="meta-chip__icon">👤</span>{PRESENTER.name} · {PRESENTER.studentNumber}</div>
        <div className="meta-chip"><span className="meta-chip__icon">🎓</span>{PRESENTER.course}</div>
        <div className="meta-chip"><span className="meta-chip__icon">🏢</span>{PRESENTER.company}</div>
        <div className="meta-chip"><span className="meta-chip__icon">👥</span>{PRESENTER.supervisorPractical} & {PRESENTER.supervisorTechnical}</div>
      </div>
    </div>
  );
}

export default function Slide({ slide, direction }: Props) {
  const cls = `slide ${direction === 'backward' ? 'slide-enter-left' : ''}`;
  const isIntro = slide.id === 'intro';
  const isFullVisual = FULL_VISUAL_IDS.has(slide.id);
  const hasVisual = slide.visual.type !== 'none';

  if (isIntro) return <div className={cls}><IntroSlide /></div>;

  if (isFullVisual) {
    return (
      <div className={cls}>
        <div className="slide__section-tag">{slide.section}</div>
        <h2 className="slide__title">{slide.title}</h2>
        {slide.subtitle && <p className="slide__subtitle">{slide.subtitle}</p>}
        <div style={{ flex: 1, overflow: 'auto' }}>
          <VisualPanel type={slide.visual.type} />
        </div>
      </div>
    );
  }

  return (
    <div className={cls}>
      <div className="slide__section-tag">{slide.section}</div>
      <h2 className="slide__title">{slide.title}</h2>
      {slide.subtitle && <p className="slide__subtitle">{slide.subtitle}</p>}
      <div className={`slide__body ${hasVisual ? 'slide__body--with-visual' : ''}`}>
        {slide.points.length > 0 && (
          <div className="slide__points">
            {slide.points.map((point, i) => (
              <div key={i} className="point-card">
                {point.icon && <span className="point-card__icon">{point.icon}</span>}
                <div className="point-card__content">
                  <div className="point-card__label">{point.label}</div>
                  {point.detail && <div className="point-card__detail">{point.detail}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
        {hasVisual && (
          <div style={{ overflow: 'auto' }}>
            <VisualPanel type={slide.visual.type} />
          </div>
        )}
      </div>
    </div>
  );
}
