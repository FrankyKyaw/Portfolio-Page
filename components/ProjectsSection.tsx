"use client";
import { useState, useMemo, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS, PROJECT_FILTERS, type Project } from "@/lib/data";

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article
      className={`pcard ${p.featured ? "pcard-featured" : ""}`}
      onClick={() => onOpen(p)}
    >
      <div className="pcard-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" />
        {/* {p.featured && <span className="pcard-flag">Featured · Live on App Store</span>} */}
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
          {p.tags.map((tg) => (
            <span className="chip chip-sm" key={tg}>{tg}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!p) return;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [p, onClose]);

  if (!p) return null;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} />
        </div>
        <div className="modal-body">
          <div className="pcard-tags">
            {p.tags.map((tg) => (
              <span className="chip chip-sm" key={tg}>{tg}</span>
            ))}
          </div>
          <h3 className="modal-title">{p.name}</h3>
          <p className="modal-blurb">{p.blurb}</p>
          <div className="modal-stack">
            {p.stack.map((s) => (
              <span className="stack-pill" key={s}>{s}</span>
            ))}
          </div>
          <div className="modal-links">
            {p.links.live && (
              <a className="btn btn-primary btn-sm" href={p.links.live} target="_blank" rel="noreferrer">
                Visit site ↗
              </a>
            )}
            {p.links.appStore && (
              <a className="btn btn-dark btn-sm" href={p.links.appStore} target="_blank" rel="noreferrer">
                App Store ↗
              </a>
            )}
            {p.links.github && (
              <a className="btn btn-ghost-dark btn-sm" href={p.links.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const ref = useReveal();

  const list = useMemo(
    () => PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section band-cream reveal-root" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-kicker">/ selected work</span>
          <h2 className="sec-title">Things I&apos;ve built</h2>
          <p className="sec-lead">
            From a credit-card app live on the App Store to neural nets that write choral music.
            Filter by what you care about.
          </p>
        </div>

        <div className="filterbar reveal" data-d="1">
          {PROJECT_FILTERS.map((f) => {
            const count =
              f === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.tags.includes(f)).length;
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
            <div
              className={`pgrid-item ${p.featured ? "featured" : ""}`}
              style={{ ["--i" as string]: i }}
              key={p.name}
            >
              <ProjectCard p={p} onOpen={setOpen} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal p={open} onClose={() => setOpen(null)} />
    </section>
  );
};
