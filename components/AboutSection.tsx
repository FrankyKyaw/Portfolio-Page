"use client";
import { useReveal } from "@/hooks/useReveal";
import { SKILLS } from "@/lib/data";

export const AboutSection = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section band-cream reveal-root" ref={ref}>
      <div className="wrap about-grid">
        <div className="about-left reveal">
          <span className="sec-kicker">/ about</span>
          <h2 className="sec-title">Two disciplines,<br />one engineer.</h2>
          <p className="about-p">
            I&apos;m a Computer Science grad from Bennington College, now a Help Desk Engineer at{" "}
            <strong>Bay State IT</strong>, a fast-paced Boston MSP. I support clients across Microsoft 365,
            Entra ID, networking and endpoint management.
          </p>
          <p className="about-p">
           I love building software and automating workflows. Currently, I&apos;m chasing my AWS Cloud
            Practitioner cert.
          </p>
          {/* <p className="about-p about-aside">
            Aside from work, I love playing the piano and reading books.
          </p> */}
        </div>

        <div className="about-right reveal" data-d="1">
          {/* <div className="about-photo">
            <span className="about-photo-tag">{'// you, here'}</span>
          </div> */}
          <div className="skills">
            {Object.entries(SKILLS).map(([group, list]) => (
              <div className="skill-group" key={group}>
                <h4 className="skill-h">{group}</h4>
                <div className="skill-chips">
                  {list.map((s) => (
                    <span
                      className={`chip ${group === "IT & Cloud" ? "chip-a" : "chip-b"}`}
                      key={s}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
