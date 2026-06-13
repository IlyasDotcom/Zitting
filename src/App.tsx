import { useState, useEffect, useCallback } from 'react';
import { SLIDES, PRESENTER } from './data/presentationData';
import SlideComponent from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import SpeakerNotes from './components/SpeakerNotes';
import './styles/presentation.css';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= SLIDES.length) return;
    setDirection(index > currentIndex ? 'forward' : 'backward');
    setCurrentIndex(index);
  }, [currentIndex]);

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(v => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  const slide = SLIDES[currentIndex];

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar__brand">
          <div className="topbar__logo">K</div>
          <div>
            <div className="topbar__title">{PRESENTER.name} · {PRESENTER.project}</div>
            <div className="topbar__subtitle">{PRESENTER.course} · {PRESENTER.company}</div>
          </div>
        </div>
        <div className="topbar__controls">
          <button
            className={`btn-notes ${showNotes ? 'active' : ''}`}
            onClick={() => setShowNotes(v => !v)}
            title="Toggle speaker notes (N)"
          >
            🎤 Notes
          </button>
          <span className="slide-counter">{currentIndex + 1} / {SLIDES.length}</span>
        </div>
      </header>

      <ProgressBar current={currentIndex} total={SLIDES.length} />
      <Navigation current={currentIndex} onNavigate={goTo} />

      <div className="content-area">
        <div className="slide-viewport">
          <SlideComponent key={currentIndex} slide={slide} direction={direction} />
        </div>
        {showNotes && <SpeakerNotes slide={slide} />}
      </div>

      <footer className="nav-controls">
        <button className="nav-btn" onClick={goPrev} disabled={currentIndex === 0}>
          ← Vorige
        </button>
        <div className="nav-hint">
          <span className="key-badge">←</span>
          <span className="key-badge">→</span>
          navigeren &nbsp;·&nbsp;
          <span className="key-badge">N</span>
          notes
        </div>
        <button
          className={`nav-btn ${currentIndex < SLIDES.length - 1 ? 'nav-btn--primary' : ''}`}
          onClick={goNext}
          disabled={currentIndex === SLIDES.length - 1}
        >
          Volgende →
        </button>
      </footer>
    </div>
  );
}
