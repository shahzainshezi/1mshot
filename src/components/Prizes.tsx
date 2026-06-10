function BasketballIcon() {
  return (
    <div className="prize-basketball-icon">
      <img src="/images/mask_group_1.png" alt="Prize Icon" className="prize-icon-img" />
    </div>
  );
}

export default function Prizes() {
  return (
    <section className="prizes-section" id="prizes">
      <div className="prizes-container">
        <div className="prizes-heading-wrap">
          <h2 className="prizes-heading-white">STATE TO NATIONAL.</h2>
          <div className="prizes-heading-row">
            <span className="prizes-heading-white">REAL </span>
            <span className="prizes-heading-green">REWARDS</span>
          </div>
        </div>

        <div className="prizes-table">
          {/* State Level */}
          <div className="prize-col">
            <span className="prize-col-level">STATE LEVEL</span>
            <BasketballIcon />
            <div className="prize-col-amount">$10,000</div>
            <p className="prize-col-desc">High school & adult champions per state</p>
          </div>

          {/* High School Nationals */}
          <div className="prize-col prize-col-border">
            <span className="prize-col-level">HIGH SCHOOL NATIONALS</span>
            <BasketballIcon />
            <div className="prize-col-amount">$100,000</div>
            <p className="prize-col-desc">One national champion</p>
          </div>

          {/* Grand Prize */}
          <div className="prize-col prize-col-featured">
            <div className="prize-grand-badge">GRAND PRIZE</div>
            <span className="prize-col-level">ADULT NATIONAL CHAMPION</span>
            <BasketballIcon />
            <div className="prize-col-amount">$1,000,000</div>
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
