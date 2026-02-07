"use client";

import { useSeasonState } from "@/app/components/season-state-provider";

export function FounderStakeBar() {
  const { seasonPoints, claimableRewards } = useSeasonState();

  return (
    <aside className="founder-stake panel" aria-live="polite">
      <div>
        <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--muted)" }}>Founder Stake (Always Visible)</p>
        <h3 style={{ margin: "0.2rem 0 0.2rem", fontSize: "1rem" }}>12,500 $TOWEL Locked</h3>
        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
          Season points: {seasonPoints} | Claimable: {claimableRewards.toFixed(1)} SOL
        </p>
      </div>
      <span className="badge">S1</span>
    </aside>
  );
}
