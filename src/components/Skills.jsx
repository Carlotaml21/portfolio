export default function Skills({ t }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section__title">{t.skills.title}</h2>
        <p className="section__lead">{t.skills.subtitle}</p>

        <div className="skills__grid">
          {t.skills.groups.map((group, i) => (
            <div key={i} className="skill-group">
              <h3 className="skill-group__name">{group.name}</h3>
              <ul className="skill-group__list">
                {group.items.map((item, j) => (
                  <li key={j} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__extra">
          <div className="skills__block">
            <h3 className="skill-group__name">{t.skills.certsTitle}</h3>
            <ul className="skill-group__list">
              {t.skills.certs.map((c, i) => (
                <li key={i} className="tag tag--accent">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills__block">
            <h3 className="skill-group__name">{t.skills.langsTitle}</h3>
            <ul className="langs">
              {t.skills.langs.map((l, i) => (
                <li key={i}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
