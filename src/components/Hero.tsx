"use client";
import { Zap, CheckCircle, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up delay-1">
            <div className="hero-title-text">
              The Official <br />
              <span className="green-text">$1,000,000</span> <br />
              3-Point Contest
            </div>
            <img
              src="/images/hero-mobile-title.svg"
              alt="The Official $1,000,000 3-Point Contest"
              className="hero-title-mobile-img"
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
              Take Your Shot — $1,000,000 on the Line
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
