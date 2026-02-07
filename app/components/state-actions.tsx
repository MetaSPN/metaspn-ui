"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useSeasonState } from "@/app/components/season-state-provider";

export function StateActions() {
  const { connected } = useWallet();
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
    <section className="panel" style={{ padding: "1rem" }}>
      <h2 style={{ marginTop: 0 }}>Season 1 State Machine</h2>
      <p className="muted" style={{ marginTop: 0 }}>
        Current state: <strong style={{ color: "var(--text)" }}>{seasonState}</strong>
      </p>
      <p className="muted">$TOWEL: {towelBalance} | Points: {seasonPoints} | Claimable: {claimableRewards.toFixed(1)} SOL</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        <button className="button secondary" onClick={simulateAcquireTowel} disabled={!connected}>
          Acquire $TOWEL
        </button>
        <button className="button" onClick={simulateStake} disabled={!connected || towelBalance < 100 || seasonState === "season_complete_claimable"}>
          Stake 100 $TOWEL
        </button>
        <button className="button secondary" onClick={simulateCompleteSeason} disabled={!connected || seasonPoints === 0 || seasonState === "season_complete_claimable"}>
          Complete Season
        </button>
        <button className="button" onClick={simulateClaim} disabled={claimableRewards <= 0}>
          Claim Rewards
        </button>
      </div>
    </section>
  );
}
