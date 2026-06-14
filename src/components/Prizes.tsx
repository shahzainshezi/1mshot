import CountUp from "./CountUp";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function BasketballIcon() {
  return (
    <div className="prize-basketball-icon">
      <img src={`\${prefix}/images/mask_group_1.png`} alt="Prize Icon" className="prize-icon-img" />
    </div>
  );
}

export default function Prizes() {
  return (
    <section className="prizes-section" id="prizes">
      <div className="prizes-container">
        <div className="prizes-heading-wrap">
          <div className="prizes-heading-text">
            <h2 className="prizes-heading-white">STATE TO NATIONAL.</h2>
            <div className="prizes-heading-row">
              <span className="prizes-heading-white">REAL </span>
              <span className="prizes-heading-green">REWARDS</span>
            </div>
          </div>
          <img
            src={`\${prefix}/images/rewards-mobile-title.svg`}
            alt="STATE TO NATIONAL. REAL REWARDS"
            className="prizes-heading-mobile-img"
          />
        </div>

        <div className="prizes-table">
          {/* State Level */}
          <div className="prize-col">
            <span className="prize-col-level">STATE LEVEL</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              <CountUp end={10000} prefix="$" />
            </div>
            <p className="prize-col-desc">High school & adult champions per state</p>
          </div>

          {/* High School Nationals */}
          <div className="prize-col prize-col-border">
            <span className="prize-col-level">HIGH SCHOOL NATIONALS</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              <CountUp end={100000} prefix="$" />
            </div>
            <p className="prize-col-desc">One national champion</p>
          </div>

          {/* Grand Prize */}
          <div className="prize-col prize-col-featured">
            <div className="prize-grand-badge">GRAND PRIZE</div>
            <span className="prize-col-level">ADULT NATIONAL CHAMPION</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              <CountUp end={1000000} prefix="$" />
            </div>
            <p className="prize-col-desc">One champion. One shot. One million.</p>
          </div>
        </div>

        <div className="prizes-footer-wrap">
          <div className="prizes-footer-note">
            EVERY LEVEL MATTERS. <span className="green-text">EVERY SHOT COUNTS</span>
          </div>

          <a href="#register" className="btn-full-green prizes-cta">
            COMPETE FOR $1,000,000
          </a>
        </div>
      </div>
    </section>
  );
}

