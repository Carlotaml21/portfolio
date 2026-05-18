export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{t.about.title}</h2>
        <p className="section__lead">{t.about.lead}</p>

        <div className="about__grid">
          <div className="about__text">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="about__facts">
            {t.about.facts.map((f, i) => (
              <li key={i} className="fact">
                <span className="fact__value">{f.value}</span>
                <span className="fact__label">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
