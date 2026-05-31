"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { PROFILE } from "@/lib/data";

const NAV_ITEMS = [
  { label: "About",      to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects",   to: "projects" },
  { label: "Contact",    to: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-on" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#home" className="nav-logo">
          <span className="nav-mark">FK</span>
          <span className="nav-name">Franky Kyaw</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth
              duration={600}
              offset={-76}
              onClick={() => setOpen(false)}
            >
              {label}
            </ScrollLink>
          ))}
          <a
            className="nav-resume"
            href={PROFILE.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Résumé ↗
          </a>
        </nav>

        <button
          className="nav-burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
