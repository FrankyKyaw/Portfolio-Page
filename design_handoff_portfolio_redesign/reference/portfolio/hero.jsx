// hero.jsx — animated terminal hero (imperative typing, no React re-renders)
const { useEffect, useRef } = React;

function Terminal({ reduceMotion }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    body.innerHTML = "";
    const lines = window.TERMINAL;

    const promptHTML = '<span class="term-prompt">franky@cloud<span class="term-tilde"> ~ $</span></span>';

    const makeLine = (l) => {
      const div = document.createElement("div");
      div.className = `term-line term-${l.kind}`;
      if (l.kind === "cmd") div.innerHTML = promptHTML + '<span class="term-text"></span>';
      else div.innerHTML = '<span class="term-text"></span>';
      return div;
    };

    // reduced motion → dump everything + a resting caret
    if (reduceMotion) {
      lines.forEach((l) => {
        const d = makeLine(l);
        d.querySelector(".term-text").textContent = (l.kind === "cmd" ? " " : "") + l.text;
        body.appendChild(d);
      });
      const rest = document.createElement("div");
      rest.className = "term-line term-cmd";
      rest.innerHTML = promptHTML + '<span class="term-caret"></span>';
      body.appendChild(rest);
      return;
    }

    let cancelled = false;
    const timers = [];
    const wait = (ms) => new Promise((res) => timers.push(setTimeout(res, ms)));

    // a single live caret element moved between lines
    const caret = document.createElement("span");
    caret.className = "term-caret";

    async function run() {
      await wait(450);
      for (let i = 0; i < lines.length && !cancelled; i++) {
        const l = lines[i];
        const div = makeLine(l);
        const txt = div.querySelector(".term-text");
        if (l.kind === "cmd") txt.appendChild(document.createTextNode(" "));
        div.appendChild(caret);
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;

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
        body.scrollTop = body.scrollHeight;
      }
      if (!cancelled) {
        const rest = document.createElement("div");
        rest.className = "term-line term-cmd";
        rest.innerHTML = promptHTML + " ";
        rest.appendChild(caret);
        body.appendChild(rest);
        body.scrollTop = body.scrollHeight;
      }
    }
    run();

    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [reduceMotion]);

  return (
    <div className="terminal" role="img" aria-label="Terminal introducing Franky Kyaw">
      <div className="term-bar">
        <span className="term-dot" /><span className="term-dot" /><span className="term-dot" />
        <span className="term-title">franky — zsh</span>
      </div>
      <div className="term-body" ref={bodyRef}></div>
    </div>
  );
}

function Hero({ t }) {
  const p = window.PROFILE;
  return (
    <section id="home" className="hero band-ink reveal-root">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="hero-left">
          <div className="reveal" data-d="0">
            <span className="eyebrow"><span className="eyebrow-dot"></span> {p.location} · available for work</span>
          </div>
          <h1 className="hero-name reveal" data-d="1">{p.name}</h1>
          <h2 className="hero-role reveal" data-d="2">
            <span className="hl">IT &amp; Cloud Engineer</span><br />
            <span className="hero-role-sub">who ships software.</span>
          </h2>
          <p className="hero-blurb reveal" data-d="3">{p.blurb}</p>
          <div className="hero-cta reveal" data-d="4">
            <a href="#projects" className="btn btn-primary magnetic">See my work <span className="btn-arrow">↓</span></a>
            <a href="#contact" className="btn btn-ghost magnetic">Get in touch</a>
          </div>
          <div className="hero-social reveal" data-d="5">
            <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            <span className="sep">/</span>
            <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="sep">/</span>
            <a href={p.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
        </div>
        <div className="hero-right reveal" data-d="3">
          <Terminal reduceMotion={t.reduceMotion} />
          <div className="hero-stats">
            {window.STATS.map((s, i) => (
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
        <span className="scroll-line"></span>
      </a>
    </section>
  );
}

window.Hero = Hero;
