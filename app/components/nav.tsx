import Link from "next/link";
import { WalletStatus } from "@/app/components/wallet-status";

const links = [
  ["/", "Landing"],
  ["/dashboard", "Player"],
  ["/games", "Games"],
  ["/signal-map", "Signal Map"],
  ["/rewards", "Rewards"],
  ["/season-summary", "Season"]
];

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" style={{ fontWeight: 700, letterSpacing: "0.04em" }}>
          MetaSPN S1
        </Link>
        <nav className="nav-links">
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
