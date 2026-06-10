const rules = [
  "5 Racks",
  "1 Minute",
  "Money balls included",
  "Bonus long-range shots",
  "Highest score wins",
];

const shooters = [
  "Everyday hoopers",
  "High school players",
  "College players",
  "Anyone who can shoot",
];

function CheckBullet() {
  return (
    <span className="format-bullet">
      <img 
        src="/images/mask_group_7.svg" 
        alt="Check Icon" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
      />
    </span>
  );
}

export default function TheFormat() {
  return (
    <section className="format-section" id="the-format">
      <div className="format-grid">
        {/* Left dark panel */}
        <div className="format-panel">
          <div className="format-badge">THE RULES</div>
          <h2 className="format-panel-title">THE FORMAT</h2>
          <ul className="format-list">
            {rules.map((rule) => (
              <li key={rule} className="format-list-item">
                <CheckBullet />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
          <div className="format-separator"></div>
          <div className="format-footer">
            <p className="format-footer-sub">No gimmicks. No shortcuts.</p>
            <p className="format-footer-main">JUST SHOOTING.</p>
          </div>
        </div>

        {/* Center player images */}
        <div className="format-img-col format-img-left-col">
          <img
            src="/images/format_player_left.png"
            alt="Player"
            className="format-player-img"
          />
        </div>
        <div className="format-img-col format-img-right-col">
          <img
            src="/images/format_player_right.png"
            alt="Player"
            className="format-player-img"
          />
        </div>

        {/* Right dark panel */}
        <div className="format-panel format-panel-right">
          <div className="format-badge">THE SHOOTERS</div>
          <h2 className="format-panel-title">WHO THIS IS FOR</h2>
          <ul className="format-list">
            {shooters.map((shooter) => (
              <li key={shooter} className="format-list-item">
                <CheckBullet />
                <span>{shooter}</span>
              </li>
            ))}
          </ul>
          <div className="format-separator"></div>
          <div className="format-footer">
            <p className="format-footer-sub">The opportunity is here.</p>
            <p className="format-footer-mid">WHAT YOU DO WITH</p>
            <p className="format-footer-main">IT IS EVERYTHING.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
