"use client";

import { useSeasonState } from "@/app/components/season-state-provider";

export default function RewardsPage() {
  const { claimableRewards, seasonPoints, simulateCompleteSeason, simulateClaim } = useSeasonState();

  return (
    <main className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Reward Dashboard</h1>
        <p className="muted">Track claim readiness and finalize Season 1 rewards.</p>
        <div className="grid two">
          <article className="panel" style={{ padding: "0.9rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Season Points</p>
            <h2 style={{ marginBottom: 0 }}>{seasonPoints}</h2>
          </article>
          <article className="panel" style={{ padding: "0.9rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Claimable SOL</p>
            <h2 style={{ marginBottom: 0 }}>{claimableRewards.toFixed(2)}</h2>
          </article>
        </div>
        <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.6rem" }}>
          <button className="button secondary" onClick={simulateCompleteSeason}>Validate Season Completion</button>
          <button className="button" onClick={simulateClaim}>Claim Rewards</button>
        </div>
      </section>
    </main>
  );
}
