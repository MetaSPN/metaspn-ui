"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useSeasonState } from "@/app/components/season-state-provider";

const stateLabel: Record<string, string> = {
  not_connected: "Wallet disconnected",
  connected_no_towel: "Connected, no $TOWEL",
  active_staker: "Active staker",
  season_complete_claimable: "Season complete: claim ready"
};

export function WalletStatus() {
  const { seasonState } = useSeasonState();

  return (
    <div className="panel" style={{ padding: "0.7rem", display: "flex", gap: "0.8rem", alignItems: "center" }}>
      <WalletMultiButton />
      <span className="badge">{stateLabel[seasonState]}</span>
    </div>
  );
}
