"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Use setTimeout to avoid synchronous setState inside useEffect warning
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const onMouseEnterInteractive = () => setIsHovered(true);
    const onMouseLeaveInteractive = () => setIsHovered(false);

    window.addEventListener("mousemove", onMouseMove);

    // Dynamic hover listeners function
    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, input, select, textarea, .prize-col, .hiw-step-card, .partner-card, .stats-item");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    // Observe changes to the DOM to attach listeners to dynamic elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    addHoverListeners();

    return () => {
      clearTimeout(visibilityTimer);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const elements = document.querySelectorAll("a, button, input, select, textarea, .prize-col, .hiw-step-card, .partner-card, .stats-item");
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? "ring-hovered" : ""}`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
