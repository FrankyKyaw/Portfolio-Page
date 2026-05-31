"use client";
import { useReveal } from "@/hooks/useReveal";
import { PROFILE } from "@/lib/data";

export const ContactSection = () => {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="section band-ink contact reveal-root"
      ref={ref}
    >
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap" style={{ display: "flex", justifyContent: "center" }}>
        <div className="contact-inner reveal">
          <span className="sec-kicker on-ink">/ say hello</span>
          <h2 className="contact-big">
            Let&apos;s build<br />something <span className="hl">solid.</span>
          </h2>
          <p className="contact-lead">
            Open to roles in IT automation, cloud operations and full-stack development — and always
            up for a good infra problem.
          </p>
          <a className="btn btn-primary btn-lg" href={`mailto:${PROFILE.email}`}>
            Email me <span className="btn-arrow">→</span>
          </a>
          <div className="contact-row">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer">Résumé</a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>© 2026 {PROFILE.name}</span>
        <span className="footer-mid">Built in Boston · Bricolage Grotesque + JetBrains Mono</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
};
