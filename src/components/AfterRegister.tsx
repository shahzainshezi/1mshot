import { ReactNode } from "react";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface Step {
  title: ReactNode;
  icon: ReactNode;
}

const afterSteps: Step[] = [
  {
    title: <>Your spot is<br />secured</>,
    icon: (
      <object data={`${prefix}/images/mask_group_10.svg`} type="image/svg+xml" className="after-card-img" />
    )
  },
  {
    title: <>Instant<br />confirmation</>,
    icon: (
      <object data={`${prefix}/images/mask_group_11.svg`} type="image/svg+xml" className="after-card-img" />
    )
  },
  {
    title: <>Event details sent<br />immediately</>,
    icon: (
      <object data={`${prefix}/images/mask_group_12.svg`} type="image/svg+xml" className="after-card-img" />
    )
  },
  {
    title: <>You compete<br />for your city</>,
    icon: (
      <object data={`${prefix}/images/mask_group_13.svg`} type="image/svg+xml" className="after-card-img" />
    )
  }
];

export default function AfterRegister() {
  return (
    <>
      {/* What Happens After You Register */}
      {/* <section className="after-section">
        <div className="after-container">
          <div className="after-cards-col">
            <div className="after-cards-grid">
              {afterSteps.map((step, idx) => (
                <div key={idx} className="after-card">
                  <div className="after-card-icon-wrap">
                    {step.icon}
                  </div>
                  <p className="after-card-title">{step.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="after-content-col">
            <h2 className="after-heading">
              WHAT HAPPENS
              <br />
              AFTER YOU
              <br />
              <span className="green-text">REGISTER</span>
            </h2>
            <a href="#register" className="btn-full-green after-cta-btn">
              ENTER NOW — LIMITED SPOTS
            </a>
          </div>
        </div>
      </section> */}

      {/* Why Not You */}
      <section className="why-section">
        <div className="why-inner">
          <h2 className="why-heading">
            WHY NOT <span className="green-text">YOU?</span>
          </h2>
          <p className="why-sub">
            The opportunity is there.
            <br />
            All it takes is one hot minute.
          </p>
          
          <div className="why-btn-wrap">
            <a href="#register" className="btn-full-green why-cta-btn">
              TAKE YOUR SHOT — $1,000,000 ON THE LINE
            </a>
          </div>

          <p className="why-contest-text">
            1MSHOT &bull; The Official $1,000,000 3-Point Contest
          </p>

          <a href="#details" className="why-details-link">
            View Full Details &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
