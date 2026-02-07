"use client";

import { useSeasonState } from "@/app/components/season-state-provider";

export default function SeasonSummaryPage() {
  const { seasonState, seasonPoints, claimableRewards } = useSeasonState();

  return (
    <div className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Season Summary</h1>
        <p className="muted">Final state, point outcomes, and claim readiness for Season 1.</p>
      </section>
      <article className="panel" style={{ padding: "1rem" }}>
        <h2 className="card-title">Status</h2>
        <p className="muted">Current lifecycle state: {seasonState}</p>
        <p style={{ marginBottom: 0 }}>Total points accrued: {seasonPoints}</p>
        <p style={{ marginBottom: 0 }}>Rewards ready to claim: {claimableRewards.toFixed(1)} SOL</p>
      </article>
    </div>
  );
}
