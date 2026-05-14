import { profile } from "../config";
import { MailIcon, LinkedInIcon, GitHubIcon, DownloadIcon } from "./icons";

export default function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__greeting">{t.hero.greeting}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{t.hero.role}</p>
        <p className="hero__tagline">{t.hero.tagline}</p>

        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            {t.hero.ctaContact}
          </a>
          <a href={profile.cv} className="btn btn--ghost" download>
            <DownloadIcon /> {t.hero.ctaCv}
          </a>
        </div>

        <div className="hero__social">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
