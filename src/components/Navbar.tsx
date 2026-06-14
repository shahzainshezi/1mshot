"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Format", href: "#the-format" },
  { label: "Who Is It For", href: "#who-is-it-for" },
  { label: "Competition", href: "#competition" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div className="nav-logo">
          <img
            src={`${prefix}/1mshot-logo-cropped.webp`}
            alt="1MSHOT"
            style={{ height: "28px", width: "auto", display: "block" }}
          />
        </div>

        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ display: "flex" }}>
          {NAV_LINKS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="#register" className="btn-cta header-cta">
            Secure Your Spot
          </a>

          {/* Mobile Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? (
              <X size={24} />
            ) : (
              <img
                src={`${prefix}/images/hamburger.svg`}
                alt="Menu"
                style={{ height: "24px", width: "auto", display: "block" }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#register" className="btn-cta menu-cta" style={{ textAlign: "center" }} onClick={() => setOpen(false)}>
            Secure Your Spot
          </a>
        </div>
      )}
    </nav>
  );
}

