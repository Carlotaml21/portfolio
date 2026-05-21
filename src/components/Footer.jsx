import { profile } from "../config";
import { MailIcon, LinkedInIcon, GitHubIcon } from "./icons";

export default function Footer({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{profile.name}</p>
        <div className="footer__social">
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
        <p className="footer__meta">
          © {year} · {profile.name}. {t.footer.rights} · {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
