"use client";

import Link from "next/link";
import { WalletStatus } from "@/app/components/wallet-status";

const links = [
  ["/", "Landing"],
  ["/dashboard", "Dashboard"],
  ["/games", "Games"],
  ["/network", "Signal Map"],
  ["/rewards", "Rewards"],
  ["/season", "Season"],
  ["/admin", "Founder Admin"]
] as const;

export function TopNav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" style={{ fontWeight: 700, letterSpacing: "0.04em" }}>
          MetaSPN S1
        </Link>
        <nav className="nav-links" aria-label="Primary Navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <WalletStatus />
      </div>
    </header>
  );
}
