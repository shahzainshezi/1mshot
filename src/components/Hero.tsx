"use client";
import { useEffect, useRef } from "react";
import { Zap, CheckCircle, Shield } from "lucide-react";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.error("Video autoplay failed:", err);
      });
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = true;
      mobileVideoRef.current.play().catch((err) => {
        console.error("Mobile video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <video
        ref={videoRef}
        className="hero-video-bg hero-video-desktop"
        autoPlay
        loop
        muted
        playsInline
        src={`${prefix}/videos/hero-bg-desktop.mp4`}
      />
      <video
        ref={mobileVideoRef}
        className="hero-video-bg hero-video-mobile"
        autoPlay
        loop
        muted
        playsInline
        src={`${prefix}/videos/hero-bg-mobile.mp4`}
      />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <div className="hero-title-text">
              <div className="reveal-line">
                <div className="reveal-inner delay-1">The Official</div>
              </div>
              <div className="reveal-line">
                <div className="reveal-inner delay-2"><span className="green-text">$1,000,000</span></div>
              </div>
              <div className="reveal-line">
                <div className="reveal-inner delay-3">3-Point Contest</div>
              </div>
            </div>
            <img
              src={`${prefix}/images/hero-mobile-title.svg`}
              alt="The Official $1,000,000 3-Point Contest"
              className="hero-title-mobile-img animate-fade-up"
            />
          </h1>

          <p className="hero-subtitle animate-fade-up delay-2">
            For Everyday Hoopers. No Pros. No Politics. <span className="green-highlight">Just Buckets.</span>
          </p>

          <p className="hero-racks animate-fade-up delay-3">
            Five Racks. One Minute. One Million
          </p>

          <div className="hero-cta-wrapper animate-fade-up delay-4">
            <a href="#register" className="btn-hero-cta font-satoshi">
              Register now - limited spots.
            </a>

            <div className="hero-badges">
              <div className="hero-badge">
                <Zap size={14} className="badge-icon-green" />
                <span>Takes 30 seconds</span>
              </div>
              <div className="hero-badge">
                <CheckCircle size={14} className="badge-icon-green" />
                <span>Instant Confirmation</span>
              </div>
              <div className="hero-badge">
                <Shield size={14} className="badge-icon-green" />
                <span>No Commitment Required</span>
              </div>
            </div>
          </div>

          <a href="#rules" className="hero-rules-link font-satoshi animate-fade-up delay-5">
            Want Full Details? View Official Rules & Structure →
          </a>
        </div>
      </div>
    </section>
  );
}

