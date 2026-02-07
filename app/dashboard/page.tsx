"use client";

import { useSeasonState } from "@/app/components/season-state-provider";

export default function DashboardPage() {
  const {
    seasonState,
    towelBalance,
    seasonPoints,
    claimableRewards,
    simulateAcquireTowel,
    simulateStake,
    simulateCompleteSeason,
    simulateClaim
  } = useSeasonState();

  return (
    <main className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Player Dashboard</h1>
        <p className="muted">Season state machine driver and personal staking posture.</p>
        <div className="grid two">
          <div className="panel" style={{ padding: "0.85rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Current State</p>
            <h2 style={{ marginBottom: 0 }}>{seasonState.replaceAll("_", " ")}</h2>
          </div>
          <div className="panel" style={{ padding: "0.85rem" }}>
            <p className="muted" style={{ marginTop: 0 }}>Balance + Points</p>
            <h2 style={{ marginBottom: 0 }}>{towelBalance} $TOWEL / {seasonPoints} SP</h2>
          </div>
        </div>
        <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <button className="button" onClick={simulateAcquireTowel}>Acquire $TOWEL</button>
          <button className="button secondary" onClick={simulateStake}>Stake 100</button>
          <button className="button secondary" onClick={simulateCompleteSeason}>Complete Season</button>
          <button className="button" onClick={simulateClaim}>Claim {claimableRewards.toFixed(1)} SOL</button>
        </div>
      </section>
    </main>
  );
}
