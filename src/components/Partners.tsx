const partnerLogos = [
  { sublabel: "NIKE-LEVEL", desc: "PERFORMANCE", img: "/images/image_66.svg" },
  { sublabel: "WILSON-LEVEL", desc: "QUALITY", img: "/images/mask_group_8.svg" },
  { sublabel: "ESPN-LEVEL", desc: "EXPOSURE", img: "/images/image.png" },
  { sublabel: "GATORADE-LEVEL", desc: "HYDRATION", img: "/images/image_68.svg" },
  { sublabel: "OVERTIME-LEVEL", desc: "CONTENT", img: "/images/image_69.svg" },
];
const partnerCategories = [
  { label: "official", type: "APPAREL PARTNER", img: "/images/Mask group (9).svg" },
  { label: "official", type: "GAME BALL PARTNER", img: "/images/mask_group_gameball.svg" },
  { label: "official", type: "HYDRATION PARTNER", img: "/images/mask_group_hydration.svg" },
  { label: "official", type: "MEDIA PARTNER", img: "/images/mask_group_media.svg" },
];

function GreenDivider() {
  return <div className="partner-vert-divider" />;
}

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header-wrap">
          <h2 className="partners-heading">
            BUILT FOR THE<br /> <span className="green-text">HIGHEST LEVEL</span>
          </h2>
          <div className="partners-divider"></div>
          <p className="partners-subtitle">
            Designed to operate at the standard of the world&apos;s leading sports<br /> and media platforms — from performance to exposure.
          </p>
        </div>

        {/* Partner logos row */}
        <div className="partner-logos-row">
          {partnerLogos.map((p, i) => (
            <div key={i} className="partner-logo-group">
              {i > 0 && <GreenDivider />}
              <div className="partner-logo-item">
                <div className="partner-logo-img-wrap">
                  <img src={p.img} alt={p.sublabel} className="partner-logo-img" />
                </div>
                <div className="partner-logo-glow-bar" />
                <div className="partner-logo-labels">
                  <span className="partner-logo-sublabel">{p.sublabel}</span>
                  <span className="partner-logo-desc">{p.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official partner categories header */}
        <div className="partner-cat-header">
          <div className="partner-cat-line" />
          <span className="partner-cat-title">OFFICIAL PARTNER CATEGORIES</span>
          <div className="partner-cat-line" />
        </div>

        {/* Partner category cards */}
        <div className="partner-cards-grid">
          {partnerCategories.map((cat) => (
            <div key={cat.type} className="partner-card">
              <div className="partner-card-icon-wrap">
                <img src={cat.img} alt={cat.type} className="partner-card-icon-img" />
              </div>
              <div className="partner-card-labels">
                <span className="partner-card-official">{cat.label}</span>
                <span className="partner-card-type">{cat.type}</span>
              </div>
              <div className="partner-card-sep" />
              <span className="partner-card-opportunity">partner opportunity</span>
              <div className="partner-card-active">
                <span className="partner-active-dot" />
                <span className="partner-active-label">active discussions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="partners-footer">
          <div className="partners-footer-row">
            <div className="partner-cat-line" />
            <span className="partners-footer-text">
              Built for future brand alignment across all levels of competition.
            </span>
            <div className="partner-cat-line" />
          </div>
          <a href="#register" className="btn-full-green">
            TAKE YOUR SHOT — $1,000,000 ON THE LINE →
          </a>
        </div>
      </div>
    </section>
  );
}
