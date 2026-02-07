import Link from "next/link";
import { games } from "@/app/lib/data";

export default function GamesPage() {
  return (
    <main className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Games Browser</h1>
        <p className="muted">Browse current season events and choose where to route stake attention.</p>
        <div className="grid">
          {games.map((game) => (
            <article className="panel" key={game.id} style={{ padding: "0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
                <div>
                  <h2 className="card-title">{game.title}</h2>
                  <p className="muted" style={{ margin: "0.2rem 0 0" }}>
                    {new Date(game.start).toLocaleString()} • {game.status}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: 0 }} className="badge">Signal {game.strength}</p>
                  <p className="muted" style={{ margin: "0.35rem 0 0" }}>{game.stakePool.toLocaleString()} $TOWEL staked</p>
                </div>
              </div>
              <Link className="button secondary" href={`/games/${game.id}`} style={{ marginTop: "0.65rem" }}>
                View Detail
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
