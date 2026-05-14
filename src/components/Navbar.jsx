import { useState, useEffect } from "react";
import { profile } from "../config";

const SECTIONS = ["about", "experience", "skills", "education", "contact"];

export default function Navbar({ t, lang, toggleLang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <a key={key} href={`#${key}`} onClick={close}>
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
