import { games } from "@/app/lib/data";

export default function SeasonSummaryPage() {
  const totalStake = games.reduce((sum, game) => sum + game.stakePool, 0);
  const avgSignal = Math.round(games.reduce((sum, game) => sum + game.strength, 0) / games.length);

  return (
    <main className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Season Summary</h1>
        <p className="muted">Snapshot of Season 1 participation and signal performance.</p>
        <div className="grid three">
          <article className="panel" style={{ padding: "0.9rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Total Staked</p>
            <h2 style={{ marginBottom: 0 }}>{totalStake.toLocaleString()} $TOWEL</h2>
          </article>
          <article className="panel" style={{ padding: "0.9rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Average Signal</p>
            <h2 style={{ marginBottom: 0 }}>{avgSignal}</h2>
          </article>
          <article className="panel" style={{ padding: "0.9rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Active Games</p>
            <h2 style={{ marginBottom: 0 }}>{games.length}</h2>
          </article>
        </div>
      </section>
    </main>
  );
}
