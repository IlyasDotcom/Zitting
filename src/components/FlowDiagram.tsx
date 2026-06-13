export default function FlowDiagram() {
  const steps = [
    { num: '1', label: 'Gebruiker opent frontend', sub: 'React app in browser' },
    { num: '2', label: 'Keyword(s) invoeren als tags', sub: 'AND/OR logica kiezen' },
    { num: '3', label: 'Branche & regio selecteren', sub: 'Optionele extra filters' },
    { num: '4', label: 'Verzoek naar /count endpoint', sub: 'ASP.NET Core 8 REST API' },
    { num: '5', label: 'SQL full-text query uitgevoerd', sub: 'SQL Server Database' },
    { num: '6', label: 'Resultaat: telling per regio', sub: 'Aparte kaarten in de frontend' },
  ];
  return (
    <div className="flow-diagram">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="flow-step">
            <div className="flow-step__node">
              <span className="flow-step__num">{step.num}</span>
              <div><div className="flow-step__label">{step.label}</div><div className="flow-step__sub">{step.sub}</div></div>
            </div>
          </div>
          {i < steps.length - 1 && <div className="flow-arrow">↓</div>}
        </div>
      ))}
    </div>
  );
}
