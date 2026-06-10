"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // List of selectors to apply scroll-reveal to
    const selectors = [
      "h2",
      ".section-label",
      ".stats-item",
      ".hiw-step-card",
      ".hiw-mobile-step",
      ".hiw-left-content > *",
      ".hiw-right-content > *",
      ".hiw-player-img",
      ".format-panel",
      ".format-img-col",
      ".partners-subtitle",
      ".partners-divider",
      ".partner-logo-item",
      ".partner-card",
      ".prize-col",
      ".prizes-footer-wrap > *",
      ".competition-info-col > *",
      ".competition-list-item",
      ".competition-feature-text",
      ".competition-btn",
      ".beginning-content-col > *",
      ".beginning-map-col",
      ".limited-inner > *",
      ".after-cards-col > *",
      ".after-content-col > *",
      ".why-inner > *",
      ".miss-content > *",
      ".miss-image-wrapper"
    ];

    const elementsToObserve: Element[] = [];
    
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        // Exclude hero section elements as they animate instantly on load
        if (!el.closest(".hero-section")) {
          el.classList.add("reveal-element");
          elementsToObserve.push(el);
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up-active");
            observer.unobserve(entry.target); // Unobserve once animated
          }
        });
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: "0px 0px -40px 0px" // Trigger slightly before entering screen
      }
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
