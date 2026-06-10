"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Staggered incremental speed
      const increment = Math.floor(Math.random() * 8) + 2; 
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        setTimeout(() => {
          setIsLoaded(true);
          // Restore body scrolling
          document.body.style.overflow = "";
          
          // Remove from DOM after transition finishes
          setTimeout(() => {
            setShouldRender(false);
          }, 800);
        }, 300);
      }
    }, 45); // Loader runs for ~1.5 seconds

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`preloader-overlay ${isLoaded ? "preloader-exit" : ""}`}>
      <div className="preloader-content">
        {/* Glow behind logo */}
        <div className="preloader-glow" />
        
        {/* Brand logo wrapper */}
        <div className="preloader-logo-wrap">
          <img
            src="/1mshot-logo-cropped.png"
            alt="1MSHOT"
            className="preloader-logo"
          />
        </div>
        
        {/* Loading details */}
        <div className="preloader-progress-wrap">
          <div className="preloader-counter">{progress}%</div>
          <div className="preloader-bar-bg">
            <div
              className="preloader-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="preloader-loading-text">PREPARING COURT...</div>
        </div>
      </div>
    </div>
  );
}
