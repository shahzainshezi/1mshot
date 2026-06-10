"use client";

export default function HowItWorks() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-container">
        <div className="hiw-header">
          <h2 className="hiw-heading">
            HOW IT <span className="green-text-highlight">WORKS</span>
          </h2>
        </div>

        {/* Steps Flow (Desktop only: hidden on mobile) */}
        <div className="hiw-steps-desktop-flow">
          <div className="hiw-steps-grid-layout">
            {/* The SVG Curved Dashed Line (Green) */}
            <svg className="hiw-steps-svg-line" viewBox="0 0 1000 140" fill="none" preserveAspectRatio="none">
              <path
                d="M 40,110 Q 125,20 250,110 Q 375,20 500,110 Q 625,20 750,110 Q 875,20 960,110"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="2.5"
                strokeDasharray="6,6"
              />
            </svg>

            {/* Absolute Badges */}
            <div className="hiw-absolute-badge badge-1">1</div>
            <div className="hiw-absolute-badge badge-2">2</div>
            <div className="hiw-absolute-badge badge-3">3</div>
            <div className="hiw-absolute-badge badge-4">4</div>
            <div className="hiw-absolute-badge-end badge-end"></div>

            {/* Step 1: Register */}
            <div className="hiw-step-card">
              <div className="hiw-step-icon-area">
                <div className="hiw-step-icon-box">
                  <img src="/images/hiw_register.svg" alt="Register" />
                </div>
              </div>
              <div className="hiw-step-text-container">
                <h3 className="hiw-step-title">REGISTER</h3>
                <p className="hiw-step-desc">Secure your spot <br />before your city fills.</p>
              </div>
            </div>

            {/* Step 2: Compete */}
            <div className="hiw-step-card">
              <div className="hiw-step-icon-area">
                <div className="hiw-step-icon-box">
                  <img src="/images/hiw_compete.svg" alt="Compete" />
                </div>
              </div>
              <div className="hiw-step-text-container">
                <h3 className="hiw-step-title">COMPETE</h3>
                <p className="hiw-step-desc">5 racks. 1 minute.<br /> Highest score wins.</p>
              </div>
            </div>

            {/* Step 3: Advance */}
            <div className="hiw-step-card">
              <div className="hiw-step-icon-area">
                <div className="hiw-step-icon-box">
                  <img src="/images/hiw_advance.svg" alt="Advance" />
                </div>
              </div>
              <div className="hiw-step-text-container">
                <h3 className="hiw-step-title">ADVANCE</h3>
                <p className="hiw-step-desc">Top scores move<br /> forward to the next level.</p>
              </div>
            </div>

            {/* Step 4: Win */}
            <div className="hiw-step-card">
              <div className="hiw-step-icon-area">
                <div className="hiw-step-icon-box">
                  <img src="/images/hiw_win.svg" alt="Win" />
                </div>
              </div>
              <div className="hiw-step-text-container">
                <h3 className="hiw-step-title">WIN</h3>
                <p className="hiw-step-desc">
                  Win your state.<br />
                  Then compete for <br />
                  <span className="green-neon-highlight">$1,000,000.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Flow (Mobile only: hidden on desktop) */}
        <div className="hiw-steps-mobile-stack">
          {/* Step 1 */}
          <div className="hiw-mobile-step">
            <div className="hiw-mobile-timeline-col">
              <div className="hiw-mobile-badge">1</div>
            </div>
            <div className="hiw-mobile-content-col">
              <div className="hiw-mobile-icon-box">
                <img src="/images/hiw_register.svg" alt="Register" />
              </div>
              <h3 className="hiw-mobile-title">REGISTER</h3>
              <p className="hiw-mobile-desc">Secure your spot <br />before your city fills.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="hiw-mobile-step">
            <div className="hiw-mobile-timeline-col">
              <div className="hiw-mobile-badge">2</div>
            </div>
            <div className="hiw-mobile-content-col">
              <div className="hiw-mobile-icon-box">
                <img src="/images/hiw_compete.svg" alt="Compete" />
              </div>
              <h3 className="hiw-mobile-title">COMPETE</h3>
              <p className="hiw-mobile-desc">5 racks. 1 minute.<br /> Highest score wins.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="hiw-mobile-step">
            <div className="hiw-mobile-timeline-col">
              <div className="hiw-mobile-badge">3</div>
            </div>
            <div className="hiw-mobile-content-col">
              <div className="hiw-mobile-icon-box">
                <img src="/images/hiw_advance.svg" alt="Advance" />
              </div>
              <h3 className="hiw-mobile-title">ADVANCE</h3>
              <p className="hiw-mobile-desc">Top scores move<br /> forward to the next level.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="hiw-mobile-step">
            <div className="hiw-mobile-timeline-col">
              <div className="hiw-mobile-badge">4</div>
            </div>
            <div className="hiw-mobile-content-col">
              <div className="hiw-mobile-icon-box">
                <img src="/images/hiw_win.svg" alt="Win" />
              </div>
              <h3 className="hiw-mobile-title">WIN</h3>
              <p className="hiw-mobile-desc">
                Win your state. Then<br /> compete for <br />
                <span className="green-neon-highlight">$1,000,000.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom grid section */}
        <div className="hiw-bottom-grid">
          <div className="hiw-left-content">
            <div className="hiw-huge-text outline-text">NO TEAMS.</div>
            <div className="hiw-huge-text filled-text">NO POLITICS.</div>
            <div className="hiw-huge-text outline-text">NO CONNECTIONS.</div>
          </div>

          <div className="hiw-center-player">
            <img src="/images/hiw_player_cropped.png" alt="1MSHOT Player" className="hiw-player-img" />
          </div>

          <div className="hiw-right-content">
            <div className="hiw-huge-text green-highlight-text">JUST YOU...</div>
            <div className="hiw-huge-text green-highlight-text">AND THE NET</div>
            <div className="hiw-link-wrapper">
              <a href="#rules" className="hiw-rules-btn">
                See Full Competition Rules, Format & Eligibility &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
