// projects.jsx — interactive filterable gallery
const { useState: useStateP, useMemo } = React;

function ProjectCard({ p, onOpen }) {
  return (
    <article className={`pcard ${p.featured ? "pcard-featured" : ""}`} onClick={() => onOpen(p)}>
      <div className="pcard-media">
        <img src={p.image} alt={p.name} loading="lazy" />
        {p.featured && <span className="pcard-flag">Featured · Live on App Store</span>}
        <div className="pcard-hover">
          <span className="pcard-open">View details →</span>
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-head">
          <h3>{p.name}</h3>
        </div>
        <p className="pcard-blurb">{p.blurb}</p>
        <div className="pcard-tags">
          {p.tags.map((tg) => <span className="chip chip-sm" key={tg}>{tg}</span>)}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ p, onClose }) {
  if (!p) return null;
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media"><img src={p.image} alt={p.name} /></div>
        <div className="modal-body">
          <div className="pcard-tags">
            {p.tags.map((tg) => <span className="chip chip-sm" key={tg}>{tg}</span>)}
          </div>
          <h3 className="modal-title">{p.name}</h3>
          <p className="modal-blurb">{p.blurb}</p>
          <div className="modal-stack">
            {p.stack.map((s) => <span className="stack-pill" key={s}>{s}</span>)}
          </div>
          <div className="modal-links">
            {p.links.live && <a className="btn btn-primary btn-sm" href={p.links.live} target="_blank" rel="noreferrer">Visit site ↗</a>}
            {p.links.appStore && <a className="btn btn-dark btn-sm" href={p.links.appStore} target="_blank" rel="noreferrer">App Store ↗</a>}
            {p.links.github && <a className="btn btn-ghost-dark btn-sm" href={p.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects({ t }) {
  const [filter, setFilter] = useStateP("All");
  const [open, setOpen] = useStateP(null);
  const list = useMemo(
    () => window.PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section band-cream reveal-root">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-kicker">/ selected work</span>
          <h2 className="sec-title">Things I&apos;ve built</h2>
          <p className="sec-lead">From a credit-card app live on the App Store to neural nets that write choral music. Filter by what you care about.</p>
        </div>

        <div className="filterbar reveal" data-d="1">
          {window.PROJECT_FILTERS.map((f) => {
            const count = f === "All" ? window.PROJECTS.length : window.PROJECTS.filter((p) => p.tags.includes(f)).length;
            return (
              <button
                key={f}
                className={`fbtn ${filter === f ? "fbtn-on" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f} <span className="fbtn-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="pgrid" key={filter}>
          {list.map((p, i) => (
            <div className={`pgrid-item ${p.featured ? "featured" : ""}`} style={{ "--i": i }} key={p.name}>
              <ProjectCard p={p} onOpen={setOpen} />
            </div>
          ))}
        </div>
      </div>
      <ProjectModal p={open} onClose={() => setOpen(null)} />
    </section>
  );
}

window.Projects = Projects;
