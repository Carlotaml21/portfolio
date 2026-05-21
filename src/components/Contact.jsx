import { profile } from "../config";
import { MailIcon, LinkedInIcon, LocationIcon, DownloadIcon } from "./icons";

export default function Contact({ t }) {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title">{t.contact.title}</h2>
        <p className="section__lead">{t.contact.lead}</p>

        <div className="contact__cards">
          <a href={`mailto:${profile.email}`} className="contact__card">
            <MailIcon />
            <span className="contact__label">{t.contact.emailLabel}</span>
            <span className="contact__value">{profile.email}</span>
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__card">
            <LinkedInIcon />
            <span className="contact__label">{t.contact.linkedinLabel}</span>
            <span className="contact__value">{profile.name}</span>
          </a>

          <div className="contact__card">
            <LocationIcon />
            <span className="contact__label">{t.contact.locationLabel}</span>
            <span className="contact__value">{profile.location}</span>
          </div>
        </div>

        <a href={profile.cv} className="btn btn--primary" download>
          <DownloadIcon /> {t.contact.ctaCv}
        </a>
      </div>
    </section>
  );
}
