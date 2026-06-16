"use client";
import { useState, useEffect } from "react";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const beginningItems = [
  "Real players.",
  "Real opportunity.",
  "Real competition.",
];

function GreenBullet() {
  return (
    <span className="beg-bullet">
      <img src={`${prefix}/images/mask_group_7.svg`} alt="Check" className="beg-bullet-img" />
    </span>
  );
}

function Countdown() {
  const [time, setTime] = useState({ h: 11, m: 59, s: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="countdown-timer">
      <span className="countdown-val">{pad(time.h)}</span>
      <span className="countdown-sep">:</span>
      <span className="countdown-val">{pad(time.m)}</span>
      <span className="countdown-sep">:</span>
      <span className="countdown-val">{pad(time.s)}</span>
    </div>
  );
}

export default function LimitedSpots() {
  return (
    <>
      {/* This Is Just The Beginning */}
      <section className="beginning-section">
        {/* Content Column (Left) */}
        <div className="beginning-content-col">
          <h2 className="beginning-heading">
            THIS IS
            <br />
            JUST THE
            <br />
            <span className="green-text">BEGINNING</span>
          </h2>
          
          <p className="beginning-sub">BUILT TO SCALE ACROSS EVERY STATE.</p>

          <ul className="beginning-list">
            {beginningItems.map((item) => (
              <li key={item} className="beginning-list-item">
                <GreenBullet />
                <span className="beginning-feature-text">{item}</span>
              </li>
            ))}
          </ul>
          
          <a href="#register" className="btn-full-green beginning-btn">
            REGISTER NOW
          </a>
        </div>

        {/* Map Column (Right) */}
        <div className="beginning-map-col">
          <img
            src={`${prefix}/images/image_48_map.webp`}
            alt="US Map Scale"
            className="beginning-map-img"
          />
        </div>
      </section>

      {/* Limited Spots Per City */}
      <section className="limited-section">
        <div className="limited-inner">
          <h2 className="limited-heading">
            LIMITED SPOTS
            <br />
            <span className="limited-outline">PER CITY</span>
          </h2>

          {/* Countdown & Info Box */}
          <div className="limited-box">
            <div className="limited-box-left">
              <p className="limited-box-text">
                Once your city fills up,
                <br />
                registration closes.
              </p>
              <p className="limited-box-bold">No waitlist. No second chances.</p>
            </div>
            
            <div className="limited-box-right">
              <span className="limited-timer-label">TIME REMAINING</span>
              <Countdown />
            </div>
          </div>

          <a href="#register" className="btn-full-green limited-btn">
            SECURE YOUR SPOT NOW
          </a>
        </div>
      </section>
    </>
  );
}
