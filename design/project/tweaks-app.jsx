/* ── Tweaks panel app — applies live tweaks to the page via data-* + CSS vars ── */
/* eslint-disable */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2f5fd6",
  "typeface": "grotesk",
  "hero": "stacked",
  "density": "regular",
  "anim": "subtle"
}/*EDITMODE-END*/;

function BKTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => { root.style.setProperty("--accent", t.accent); }, [t.accent]);
  React.useEffect(() => { root.setAttribute("data-typeface", t.typeface); }, [t.typeface]);
  React.useEffect(() => { root.setAttribute("data-hero", t.hero); }, [t.hero]);
  React.useEffect(() => { root.setAttribute("data-density", t.density); }, [t.density]);
  React.useEffect(() => { root.setAttribute("data-anim", t.anim); }, [t.anim]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero direction" />
      <TweakRadio
        label="Layout"
        value={t.hero}
        options={[
          { value: "stacked", label: "Stack" },
          { value: "split", label: "Split" },
          { value: "centered", label: "Center" },
        ]}
        onChange={(v) => setTweak("hero", v)}
      />

      <TweakSection label="Typography" />
      <TweakSelect
        label="Heading type"
        value={t.typeface}
        options={[
          { value: "grotesk", label: "Grotesk — Space Grotesk" },
          { value: "editorial", label: "Editorial — Spectral serif" },
          { value: "mono", label: "Mono — JetBrains" },
        ]}
        onChange={(v) => setTweak("typeface", v)}
      />

      <TweakSection label="Accent" />
      <TweakColor
        label="Color"
        value={t.accent}
        options={["#2f5fd6", "#2f9e63", "#e0612f", "#cf4536", "#6d54e0"]}
        onChange={(v) => setTweak("accent", v)}
      />

      <TweakSection label="Feel" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={["compact", "regular", "comfy"]}
        onChange={(v) => setTweak("density", v)}
      />
      <TweakRadio
        label="Animation"
        value={t.anim}
        options={["off", "subtle", "lively"]}
        onChange={(v) => setTweak("anim", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<BKTweaks />);
