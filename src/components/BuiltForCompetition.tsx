const features = [
  "City-based qualifiers",
  "State champions — $10,000",
  "High school & adult divisions",
  "National stage — $1,000,000",
];

function GreenBullet() {
  return (
    <span className="comp-bullet">
      <img src="/1mshot/images/mask_group_7.svg" alt="Bullet Icon" className="comp-bullet-img" />
    </span>
  );
}

export default function BuiltForCompetition() {
  return (
    <section className="competition-section" id="competition">
      <div className="competition-bg-img" />
      <div className="competition-container">
        {/* List Column (Left) */}
        <div className="competition-list-col">
          <ul className="competition-list">
            {features.map((f) => (
              <li key={f} className="competition-list-item">
                <GreenBullet />
                <span className="competition-feature-text">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spacer Column (Center) */}
        <div className="competition-spacer-col" />

        {/* Info Column (Right) */}
        <div className="competition-info-col">
          <h2 className="competition-heading">
            BUILT FOR
            <br />
            <span className="competition-green">COMPETITION</span>
          </h2>
          <p className="competition-sub">Be part of it... or watch it happen.</p>
        </div>
      </div>
    </section>
  );
}
