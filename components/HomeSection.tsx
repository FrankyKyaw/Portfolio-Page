"use client";
import { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { PROFILE, STATS, TERMINAL } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function Terminal() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    body.innerHTML = "";
    const el = body;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = TERMINAL;

    const promptHTML =
      '<span class="term-prompt">franky@cloud<span class="term-tilde"> ~ $</span></span>';

    const makeLine = (l: (typeof lines)[number]) => {
      const div = document.createElement("div");
      div.className = `term-line term-${l.kind}`;
      div.innerHTML =
        l.kind === "cmd"
          ? promptHTML + '<span class="term-text"></span>'
          : '<span class="term-text"></span>';
      return div;
    };

    if (reduceMotion) {
      lines.forEach((l) => {
        const d = makeLine(l);
        d.querySelector(".term-text")!.textContent = (l.kind === "cmd" ? " " : "") + l.text;
        el.appendChild(d);
      });
      const rest = document.createElement("div");
      rest.className = "term-line term-cmd";
      rest.innerHTML = promptHTML + '<span class="term-caret"></span>';
      el.appendChild(rest);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)));

    const caret = document.createElement("span");
    caret.className = "term-caret";

    async function run() {
      await wait(450);
      for (let i = 0; i < lines.length && !cancelled; i++) {
        const l = lines[i];
        const div = makeLine(l);
        const txt = div.querySelector<HTMLElement>(".term-text")!;
        if (l.kind === "cmd") txt.appendChild(document.createTextNode(" "));
        div.appendChild(caret);
        el.appendChild(div);
        el.scrollTop = el.scrollHeight;

        if (l.kind === "cmd") {
          for (let c = 0; c < l.text.length && !cancelled; c++) {
            txt.textContent = " " + l.text.slice(0, c + 1);
            div.appendChild(caret);
            await wait(26 + Math.random() * 34);
          }
          await wait(260);
        } else {
          await wait(160);
          txt.textContent = l.text;
          await wait(260);
        }
        el.scrollTop = el.scrollHeight;
      }
      if (!cancelled) {
        const rest = document.createElement("div");
        rest.className = "term-line term-cmd";
        rest.innerHTML = promptHTML + " ";
        rest.appendChild(caret);
        el.appendChild(rest);
        el.scrollTop = el.scrollHeight;
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="terminal" role="img" aria-label="Terminal introducing Franky Kyaw">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">franky — zsh</span>
      </div>
      <div className="term-body" ref={bodyRef} />
    </div>
  );
}

export const HomeSection = () => {
  const ref = useReveal();

  return (
    <section id="home" className="hero band-ink reveal-root" ref={ref}>
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-left">
          <div className="reveal" data-d="0">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {PROFILE.location} 
              {/* · available for work */}
            </span>
          </div>
          <h1 className="hero-name reveal" data-d="1">{PROFILE.name}</h1>
          <h2 className="hero-role reveal" data-d="2">
            <span className="hl">IT Engineer</span>
            <br />
            {/* <span className="hero-role-sub">who ships software.</span> */}
          </h2>
          <p className="hero-blurb reveal" data-d="3">{PROFILE.blurb}</p>
          <div className="hero-cta reveal" data-d="4">
            <ScrollLink
              to="projects"
              smooth
              duration={600}
              offset={-76}
              className="btn btn-primary"
              style={{ cursor: "pointer" }}
            >
              See my work <span className="btn-arrow">↓</span>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={600}
              offset={-76}
              className="btn btn-ghost"
              style={{ cursor: "pointer" }}
            >
              Get in touch
            </ScrollLink>
          </div>
          <div className="hero-social reveal" data-d="5">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <span className="sep">/</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="sep">/</span>
            <a href={PROFILE.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
        </div>

        <div className="hero-right reveal" data-d="3">
          <Terminal />
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span>scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
};
