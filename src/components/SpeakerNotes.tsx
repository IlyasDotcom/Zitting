import { Slide } from '../data/presentationData';

interface Props { slide: Slide; }

export default function SpeakerNotes({ slide }: Props) {
  return (
    <aside className="notes-panel">
      <div className="notes-panel__header">
        <span className="notes-panel__mic">🎤</span>
        <span className="notes-panel__label">Speaker Notes</span>
      </div>
      <div className="notes-panel__body">{slide.speakerNotes}</div>
      <div className="notes-panel__importance">
        <strong>Waarom belangrijk</strong>
        {slide.defenseImportance}
      </div>
    </aside>
  );
}
