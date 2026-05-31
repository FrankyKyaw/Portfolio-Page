// app.jsx — orchestrator: tweaks, palettes, scroll reveal, magnetic hover
const { useEffect: useEffectA, useRef: useRefA } = React;

const PALETTES = {
  voltage: { label: "Voltage", swatch: ["#CDF34A", "#FF6A3D", "#15140F"] },
  riso:    { label: "Riso",    swatch: ["#3D5AFE", "#FF4D8D", "#0E0E14"] },
  solar:   { label: "Solar",   swatch: ["#FFB22C", "#E5484D", "#171310"] },
  mint:    { label: "Mint",    swatch: ["#3DF2B6", "#FF5CA8", "#0C1413"] },
};

const FONTS = {
  bricolage: { label: "Bricolage", v: "'Bricolage Grotesque', sans-serif" },
  clash:     { label: "Syne",      v: "'Syne', sans-serif" },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "voltage",
  "display": "bricolage",
  "reduceMotion": false,
  "grain": true
}/*EDITMODE-END*/;

// Reveal system — robust against animation throttling (backgrounded iframes).
// Triggers the entrance animation when possible; a periodic in-view safety pass
// force-shows anything visible so content can never stay stuck invisible.
function useScrollReveal() {
  useEffectA(() => {
    const arm = () => {
      const h = window.innerHeight || 800;
      document.querySelectorAll(".reveal").forEach((el) => {
        if (el.classList.contains("in") || el.classList.contains("shown")) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > -40) {
          const d = parseInt(el.dataset.d || "0", 10);
          el.style.animationDelay = `${d * 90}ms`;
          el.classList.add("in");
          setTimeout(() => el.classList.add("shown"), 720 + d * 90 + 500);
        }
      });
      // hard safety: any in-view reveal/card that hasn't resolved → snap visible
      document.querySelectorAll(".reveal, .pgrid-item").forEach((el) => {
        if (el.classList.contains("shown") || el.dataset.armed) return;
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.96 && r.bottom > 0) {
          el.dataset.armed = "1";
          setTimeout(() => el.classList.add("shown"), 1300);
        }
      });
    };
    arm();
    window.addEventListener("scroll", arm, { passive: true });
    window.addEventListener("resize", arm);
    let ticks = 0;
    const iv = setInterval(() => { arm(); if (++ticks > 10) clearInterval(iv); }, 450);
    return () => {
      window.removeEventListener("scroll", arm);
      window.removeEventListener("resize", arm);
      clearInterval(iv);
    };
  }, []);
}

// Magnetic hover on .magnetic
function useMagnetic(enabled) {
  useEffectA(() => {
    if (enabled) return;
    const els = Array.from(document.querySelectorAll(".magnetic"));
    const handlers = [];
    els.forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push([el, move, leave]);
    });
    return () => handlers.forEach(([el, m, l]) => {
      el.removeEventListener("mousemove", m); el.removeEventListener("mouseleave", l);
    });
  }, [enabled]);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply palette + font to root
  useEffectA(() => {
    document.documentElement.dataset.palette = t.palette;
    document.documentElement.style.setProperty("--font-display", FONTS[t.display]?.v || FONTS.bricolage.v);
    document.documentElement.classList.toggle("no-grain", !t.grain);
    document.documentElement.classList.toggle("reduce-motion", !!t.reduceMotion);
  }, [t.palette, t.display, t.grain, t.reduceMotion]);

  useScrollReveal();
  useMagnetic(t.reduceMotion);

  return (
    <React.Fragment>
      <Nav />
      <Hero t={t} />
      <About />
      <Experience />
      <Projects t={t} />
      <Contact />

      <TweaksPanel>
        <TweakSection label="Color palette" />
        <div className="tw-palettes">
          {Object.entries(PALETTES).map(([key, p]) => (
            <button
              key={key}
              className={`tw-pal ${t.palette === key ? "on" : ""}`}
              onClick={() => setTweak("palette", key)}
            >
              <span className="tw-pal-sw">
                {p.swatch.map((c, i) => <span key={i} style={{ background: c }} />)}
              </span>
              <span className="tw-pal-label">{p.label}</span>
            </button>
          ))}
        </div>
        <TweakSection label="Display font" />
        <TweakRadio
          label="Headlines"
          value={t.display}
          options={Object.entries(FONTS).map(([value, f]) => ({ value, label: f.label }))}
          onChange={(v) => setTweak("display", v)}
        />
        <TweakSection label="Motion & texture" />
        <TweakToggle label="Reduce motion" value={t.reduceMotion} onChange={(v) => setTweak("reduceMotion", v)} />
        <TweakToggle label="Film grain" value={t.grain} onChange={(v) => setTweak("grain", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
