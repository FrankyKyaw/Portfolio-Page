"use client";
import { useReveal } from "@/hooks/useReveal";
import { EXPERIENCE } from "@/lib/data";

export const ExperienceSection = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="section band-ink reveal-root" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-kicker on-ink">/ the path so far</span>
          <h2 className="sec-title on-ink">Experience</h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div className="tl-item reveal" data-d={i} key={i}>
              <div className="tl-node">
                <span className={e.current ? "tl-pulse" : ""} />
              </div>
              <div className="tl-card">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-title">{e.title}</h3>
                    <div className="tl-company">
                      {e.company}{" "}
                      <span className="tl-loc">· {e.location}</span>
                    </div>
                  </div>
                  <span className={`tl-period ${e.current ? "tl-now" : ""}`}>{e.period}</span>
                </div>
                <ul className="tl-bullets">
                  {e.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
