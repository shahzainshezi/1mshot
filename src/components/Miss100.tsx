"use client";

export default function Miss100() {
  return (
    <section className="miss-section">
      <div className="miss-container">
        <div className="miss-grid">
          {/* Left Visual — Player holding neon green basketball (miss100_player.png) */}
          <div className="miss-image-wrapper">
            <img
              src="/images/miss100_player.webp"
              alt="You miss 100% of the shots you don't take"
              className="miss-image"
            />
          </div>

          {/* Right Content */}
          <div className="miss-content">
            <h2 className="miss-title">
              YOU MISS 100%
              <br />
              <span className="hollow-text">OF THE SHOTS</span>
              <br />
              <span className="green-title-text">YOU DON&apos;T TAKE.</span>
            </h2>

            <div className="miss-divider" />

            <div className="miss-subtext">
              <p>You&apos;ve Taken This Shot Thousands Of Times.</p>
              <p>Empty Gyms. Late Nights. No Crowd.</p>
            </div>

            <div className="miss-worth">
              Now It&apos;s Worth <span className="green-neon-text">$1,000,000.</span>
            </div>

            <a href="#register" className="btn-miss-cta">
              ENTER THE $1,000,000 CONTEST
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
