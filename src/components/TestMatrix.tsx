import { TEST_MATRIX } from '../data/presentationData';

export default function TestMatrix() {
  const getResultClass = (result: string) => {
    if (result.includes('✅')) return 'test-result test-result--pass';
    if (result.includes('⚠️')) return 'test-result test-result--warn';
    return 'test-result test-result--ext';
  };
  return (
    <div className="test-matrix">
      <table>
        <thead><tr><th>Onderdeel</th><th>Type</th><th>Methode</th><th>Resultaat</th><th>Toelichting</th></tr></thead>
        <tbody>
          {TEST_MATRIX.map((row, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{row.area}</td>
              <td>{row.type}</td>
              <td>{row.method}</td>
              <td><span className={getResultClass(row.result)}>{row.result}</span></td>
              <td style={{ color: 'var(--ink-muted)', fontSize: '12px' }}>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
