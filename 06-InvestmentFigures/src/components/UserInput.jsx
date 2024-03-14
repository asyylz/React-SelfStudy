

export default function UserInput({ onChange, figures, setFigures }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={figures.initialInvestment}
              onChange={(e) => onChange("initialInvestment", e.target.value)}
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={figures.annualInvestment}
              onChange={(e) => onChange("annualInvestment", e.target.value)}
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              value={figures.expectedReturn}
              onChange={(e) => onChange("expectedReturn", e.target.value)}
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={figures.duration}
              onChange={(e) => onChange("duration", e.target.value)}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
