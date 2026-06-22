import { useState, useEffect } from "react";
import { profile } from "../config";

const SECTIONS = ["about", "experience", "skills", "education", "contact"];

export default function Navbar({ t, lang, toggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__brand-mark">CM</span>
          <span className="nav__brand-name">{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={close}
              className={active === key ? "is-active" : ""}
              aria-current={active === key ? "true" : undefined}
            >
              {t.nav[key]}
            </a>
          ))}
          <button
            type="button"
            className="nav__lang"
            onClick={toggleLang}
            aria-label="Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
