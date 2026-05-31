// sections.jsx — nav, about, experience, contact, footer
const { useState: useStateS, useEffect: useEffectS } = React;

function Nav() {
  const [scrolled, setScrolled] = useStateS(false);
  const [open, setOpen] = useStateS(false);
  useEffectS(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  const items = [
    ["About", "#about"], ["Experience", "#experience"],
    ["Projects", "#projects"], ["Contact", "#contact"],
  ];
  return (
    <header className={`nav ${scrolled ? "nav-on" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#home" className="nav-logo">
          <span className="nav-mark">FK</span>
          <span className="nav-name">Franky Kyaw</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {items.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a className="nav-resume" href={window.PROFILE.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </nav>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function About() {
  const skills = window.SKILLS;
  return (
    <section id="about" className="section band-cream reveal-root">
      <div className="wrap about-grid">
        <div className="about-left reveal">
          <span className="sec-kicker">/ about</span>
          <h2 className="sec-title">Two disciplines,<br />one engineer.</h2>
          <p className="about-p">
            I&apos;m a Computer Science grad from Bennington College, now a Help Desk Engineer at <strong>Bay State IT</strong>,
            a fast-paced Boston MSP. I support clients across Microsoft 365, Entra ID, networking and endpoint management.
          </p>
          <p className="about-p">
            What sets me apart is the dev background underneath the IT work — I&apos;ve shipped full-stack web &amp; mobile
            apps, worked with cloud infrastructure, and automated data workflows. I&apos;m growing into <strong>IT automation
            and cloud operations</strong> and chasing my AWS Cloud Practitioner cert.
          </p>
          <p className="about-p about-aside">
            Off the clock, I&apos;m at the piano — studying it and writing my own compositions. (One of my ML projects
            literally generates choral music. The overlap is not a coincidence.)
          </p>
        </div>
        <div className="about-right reveal" data-d="1">
          <div className="about-photo">
            <image-slot id="franky-photo" style={{ width: "100%", height: "100%" }} shape="rounded" radius="20" placeholder="Drop a photo of you"></image-slot>
            <span className="about-photo-tag">// you, here</span>
          </div>
          <div className="skills">
            {Object.entries(skills).map(([group, list]) => (
              <div className="skill-group" key={group}>
                <h4 className="skill-h">{group}</h4>
                <div className="skill-chips">
                  {list.map((s) => <span className={`chip ${group === "IT & Cloud" ? "chip-a" : "chip-b"}`} key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section band-ink reveal-root">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-kicker on-ink">/ the path so far</span>
          <h2 className="sec-title on-ink">Experience</h2>
        </div>
        <div className="timeline">
          {window.EXPERIENCE.map((e, i) => (
            <div className="tl-item reveal" data-d={i} key={i}>
              <div className="tl-node"><span className={e.current ? "tl-pulse" : ""} /></div>
              <div className="tl-card">
                <div className="tl-top">
                  <div>
                    <h3 className="tl-title">{e.title}</h3>
                    <div className="tl-company">{e.company} <span className="tl-loc">· {e.location}</span></div>
                  </div>
                  <span className={`tl-period ${e.current ? "tl-now" : ""}`}>{e.period}</span>
                </div>
                <ul className="tl-bullets">
                  {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const p = window.PROFILE;
  return (
    <section id="contact" className="section band-ink contact reveal-root">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap contact-inner reveal">
        <span className="sec-kicker on-ink">/ say hello</span>
        <h2 className="contact-big">Let&apos;s build<br />something <span className="hl">solid.</span></h2>
        <p className="contact-lead">
          Open to roles in IT automation, cloud operations and full-stack development — and always up for a good infra problem.
        </p>
        <a className="btn btn-primary btn-lg magnetic" href={`mailto:${p.email}`}>Email me <span className="btn-arrow">→</span></a>
        <div className="contact-row">
          <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={p.resume} target="_blank" rel="noreferrer">Résumé</a>
        </div>
      </div>
      <footer className="footer">
        <span>© 2026 {p.name}</span>
        <span className="footer-mid">Built in Boston · Bricolage Grotesque + JetBrains Mono</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}

Object.assign(window, { Nav, About, Experience, Contact });
