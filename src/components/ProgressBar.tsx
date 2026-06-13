interface Props { current: number; total: number; }

export default function ProgressBar({ current, total }: Props) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
