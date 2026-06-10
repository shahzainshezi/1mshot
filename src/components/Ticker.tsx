"use client";

export default function Ticker() {
  const text = "Spots Are Filling In Your City. Registration Closes When Full. No Waitlist. No Second Chances.";
  
  return (
    <div className="ticker-bar">
      {/* Desktop version: Static and Centered */}
      <div className="ticker-static-content">
        <span className="star">★</span>
        <span className="ticker-text">{text}</span>
        <span className="star">★</span>
      </div>

      {/* Mobile version: Infinite Scrolling Marquee */}
      <div className="ticker-track">
        {Array(4).fill(0).map((_, i) => (
          <div key={i} className="ticker-item">
            <span className="star">★</span>
            <span className="ticker-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
