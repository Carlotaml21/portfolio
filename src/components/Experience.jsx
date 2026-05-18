export default function Experience({ t }) {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.experience.title}</h2>

        <div className="timeline">
          {t.experience.items.map((job, i) => (
            <article key={i} className="job">
              <div className="job__head">
                <div>
                  <h3 className="job__role">
                    {job.role} <span className="job__company">· {job.company}</span>
                  </h3>
                  <p className="job__meta">
                    {job.period} — {job.place}
                  </p>
                </div>
              </div>

              <ul className="job__bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              <div className="job__projects">
                {job.projects.map((p, k) => (
                  <div key={k} className="job__project">
                    <span className="job__project-name">{p.name}</span>
                    <span className="tag tag--soft">{p.stack}</span>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
