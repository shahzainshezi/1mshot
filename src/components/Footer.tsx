const footerLinks = [
  { label: "Full Rules", href: "#details" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Terms", href: "#terms" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-wrap">
            <img
              src="/1mshot-logo-cropped.webp"
              alt="1MSHOT"
              className="footer-logo"
            />
          </div>
          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-nav-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="footer-divider" />
        
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 1MSHOT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
