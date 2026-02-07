const signals = [
  { region: "West", x: "12%", y: "32%", power: 88 },
  { region: "Central", x: "44%", y: "48%", power: 64 },
  { region: "East", x: "78%", y: "36%", power: 91 },
  { region: "South", x: "52%", y: "75%", power: 55 }
];

export default function NetworkPage() {
  return (
    <div className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Network Signal Map</h1>
        <p className="muted">Live view of protocol attention and stake concentration.</p>
      </section>
      <section className="panel" style={{ position: "relative", minHeight: 360, padding: "1rem", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: "1rem",
            borderRadius: 14,
            background:
              "linear-gradient(160deg, rgba(20,245,183,0.15), rgba(110,232,255,0.05)), repeating-linear-gradient(90deg, rgba(156,170,194,0.09), rgba(156,170,194,0.09) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(0deg, rgba(156,170,194,0.08), rgba(156,170,194,0.08) 1px, transparent 1px, transparent 32px)"
          }}
        />
        {signals.map((signal) => (
          <div
            key={signal.region}
            style={{
              position: "absolute",
              left: signal.x,
              top: signal.y,
              width: 12 + signal.power,
              height: 12 + signal.power,
              transform: "translate(-50%, -50%)",
              borderRadius: "999px",
              background: "radial-gradient(circle, rgba(20,245,183,0.6), rgba(20,245,183,0.09))",
              border: "1px solid rgba(110,232,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            aria-label={`${signal.region} signal ${signal.power}`}
          >
            <span style={{ fontSize: "0.7rem", color: "white", textShadow: "0 0 6px #001" }}>{signal.region}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
