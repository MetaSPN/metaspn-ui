import { games } from "@/app/lib/data";

export default function SignalMapPage() {
  return (
    <main className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Network Signal Map</h1>
        <p className="muted">Heat map of current attention strength by game in Season 1.</p>
        <div className="grid three">
          {games.map((game) => (
            <article
              key={game.id}
              className="panel"
              style={{
                padding: "1rem",
                borderColor: `rgba(20,245,183,${Math.max(0.2, game.strength / 100)})`
              }}
            >
              <h2 className="card-title">{game.title}</h2>
              <p className="muted" style={{ marginBottom: 0 }}>Signal: {game.strength}</p>
              <progress value={game.strength} max={100} style={{ width: "100%", marginTop: "0.45rem" }} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
