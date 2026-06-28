"use client";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Miss100() {
  return (
    <section className="miss-section">
      <div className="miss-container">
        <div className="miss-grid">
          {/* Left Visual — Player holding neon green basketball (miss100_player.png) */}
          <div className="miss-image-wrapper">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={`${prefix}/images/miss100_player_mobile.png`}
              />
              <img
                src={`${prefix}/images/miss100_player.webp`}
                alt="You miss 100% of the shots you don't take"
                className="miss-image"
              />
            </picture>
          </div>

          {/* Right Content */}
          <div className="miss-content">
            <h2 className="miss-title">
              <div className="miss-title-text">
                YOU MISS 100%
                <br />
                <span className="hollow-text">OF THE SHOTS</span>
                <br />
                <span className="green-title-text">YOU DON&apos;T TAKE.</span>
              </div>
              <img
                src={`${prefix}/images/miss100-mobile-title.svg`}
                alt="YOU MISS 100% OF THE SHOTS YOU DON'T TAKE."
                className="miss-title-mobile-img"
              />
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
