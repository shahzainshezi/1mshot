function StarIcon({ size = 27 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.2188 0L16.4199 8.81277L25.7906 9.13396L18.3984 14.9017L20.9886 23.913L13.2188 18.6649L5.44898 23.913L8.0392 14.9017L0.646974 9.13396L10.0176 8.81277L13.2188 0Z"
        fill="white"
      />
    </svg>
  );
}

const darkItems = [
  "23 States — Youth & Adult Divisions",
  "State Winners: $10,000 Each",
  "Two National Champions: $1,000,000",
];

const greenItems = [
  "23 States — Youth & Adult Divisions",
  "HS National Champions: $100,000",
  "Adult National Champions: $1,000,000",
];

export default function TickerBar() {
  return (
    <div className="ticker-bar-wrapper">
      <div className="ticker-row ticker-row-dark">
        <div className="ticker-track-container">
          <div className="ticker-track ticker-track-left">
            {[...darkItems, ...darkItems].map((item, i) => (
              <span key={i} className="ticker-row-item">
                <StarIcon size={29} />
                {item}
              </span>
            ))}
          </div>
          <div className="ticker-track ticker-track-left" aria-hidden="true">
            {[...darkItems, ...darkItems].map((item, i) => (
              <span key={i} className="ticker-row-item">
                <StarIcon size={29} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="ticker-row ticker-row-green">
        <div className="ticker-track-container">
          <div className="ticker-track ticker-track-right">
            {[...greenItems, ...greenItems].map((item, i) => (
              <span key={i} className="ticker-row-item">
                <StarIcon size={27} />
                {item}
              </span>
            ))}
          </div>
          <div className="ticker-track ticker-track-right" aria-hidden="true">
            {[...greenItems, ...greenItems].map((item, i) => (
              <span key={i} className="ticker-row-item">
                <StarIcon size={27} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
