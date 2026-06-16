const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function BasketballIcon() {
  return (
    <div className="prize-basketball-icon">
      <img src={`${prefix}/images/mask_group_1.png`} alt="Prize Icon" className="prize-icon-img" />
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
            src={`${prefix}/images/rewards-mobile-title.svg`}
            alt="STATE TO NATIONAL. REAL REWARDS"
            className="prizes-heading-mobile-img"
          />
        </div>

        <div className="prizes-table">
          {/* Grand Prize */}
          <div className="prize-col">
            <span className="prize-col-level">ADULT NATIONAL CHAMPION</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              $1,000,000
            </div>
          </div>

          {/* Male Youth Nationals */}
          <div className="prize-col">
            <span className="prize-col-level">MALE YOUTH NATIONAL CHAMPION</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              $100,000
            </div>
          </div>

          {/* Female Youth Nationals */}
          <div className="prize-col">
            <span className="prize-col-level">FEMALE YOUTH NATIONAL CHAMPION</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              $100,000
            </div>
          </div>

          {/* All State Champions */}
          <div className="prize-col">
            <span className="prize-col-level">ALL STATE CHAMPIONS</span>
            <BasketballIcon />
            <div className="prize-col-amount">
              $10,000
            </div>
          </div>
        </div>

        <div className="prizes-footer-wrap">
          <div className="prizes-footer-note">
            EVERY LEVEL MATTERS. <span className="green-text">EVERY SHOT COUNTS</span>
          </div>

          <div className="flex flex-col items-center gap-4 w-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', width: '100%' }}>
            <a href="#register" className="btn-full-green prizes-cta">
              Register now - Limited Spots
            </a>
            
            <a href="#rules" className="hero-rules-link font-satoshi">
              Want Full Details? View Official Rules & Structure →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

