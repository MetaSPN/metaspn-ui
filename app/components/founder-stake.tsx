"use client";

import Link from "next/link";
import { useSeasonState } from "@/app/components/season-state-provider";

export function FounderStake() {
  const { seasonState } = useSeasonState();

  return (
    <aside className="panel founder-stake">
      <div>
        <p style={{ margin: 0, fontSize: "0.8rem" }} className="muted">
          Founder Stake (Always On)
        </p>
        <p style={{ margin: "0.2rem 0 0", fontWeight: 700 }}>18.50% network allocation</p>
        <p style={{ margin: "0.2rem 0 0", fontSize: "0.8rem" }} className="muted">
          State: {seasonState.replaceAll("_", " ")}
        </p>
      </div>
      <Link className="button secondary" href="/admin">
        Admin Panel
      </Link>
    </aside>
  );
}
