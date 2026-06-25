
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const rules = [
  "5 Racks",
  "25 Rack Balls",
  "2 Deep Bonus Balls",
  "60 Seconds",
  "Maximum Score: 36",
  "Highest Score Advances",
];

const shooters = [
  "High School Players",
  "College Players",
  "Adult Players",
  "Basketball Trainers",
  "Former Players",
  "Basketball Enthusiasts",
  "Anyone Who Can Shoot",
];

function CheckBullet() {
  return (
    <span className="format-bullet">
      <img 
        src={`${prefix}/images/mask_group_7.svg`} 
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
          <div className="format-content-body">
            <h2 className="format-panel-title">CONTEST FORMAT</h2>
            <ul className="format-list">
              {rules.map((rule) => (
                <li key={rule} className="format-list-item">
                  <CheckBullet />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="format-separator"></div>
          <div className="format-footer">
            <p className="format-footer-sub">No gimmicks. No shortcuts.</p>
            <p className="format-footer-main">JUST SHOOTING.</p>
          </div>
        </div>

        {/* Center player images */}
        <div className="format-img-col format-img-left-col">
          <img
            src={`${prefix}/images/c6aa375e-fe97-48bf-9810-c7b37f681c89.jfif`}
            alt="Player"
            className="format-player-img"
          />
        </div>
        <div className="format-img-col format-img-right-col">
          <img
            src={`${prefix}/images/format_player_right.webp`}
            alt="Player"
            className="format-player-img"
          />
        </div>

        {/* Right dark panel */}
        <div className="format-panel format-panel-right">
          <div className="format-badge">THE SHOOTERS</div>
          <div className="format-content-body">
            <h2 className="format-panel-title">{"WHO IT'S FOR"}</h2>
            <ul className="format-list">
              {shooters.map((shooter) => (
                <li key={shooter} className="format-list-item">
                  <CheckBullet />
                  <span>{shooter}</span>
                </li>
              ))}
            </ul>
          </div>
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
