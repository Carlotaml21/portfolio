export default function Education({ t }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title">{t.education.title}</h2>

        <div className="edu__list">
          {t.education.items.map((item, i) => (
            <article key={i} className="edu">
              <div className="edu__main">
                <h3 className="edu__title">{item.title}</h3>
                <p className="edu__place">{item.place}</p>
                {item.tags.length > 0 && (
                  <ul className="project-card__tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag tag--soft">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="edu__year">{item.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
