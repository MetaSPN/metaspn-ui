import Link from "next/link";
import { StateActions } from "@/app/components/state-actions";

export default function LandingPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <section className="panel" style={{ padding: "1.2rem" }}>
        <span className="badge">Season 1 Live</span>
        <h1 style={{ marginBottom: "0.6rem" }}>Stake signal, capture rewards, map network momentum.</h1>
        <p className="muted" style={{ maxWidth: 700 }}>
          MetaSPN is a wallet-native signal platform. Connect Phantom or Solflare, stake $TOWEL, and track game signal strength in real time.
        </p>
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link className="button" href="/dashboard">
            Open Dashboard
          </Link>
          <Link className="button secondary" href="/games">
            Browse Games
          </Link>
        </div>
      </section>
      <StateActions />
      <section className="grid two">
        <article className="panel" style={{ padding: "1rem" }}>
          <h2 className="card-title">Network Signal Map</h2>
          <p className="muted">Heatmap clusters show active stake concentration and upside confidence.</p>
          <Link className="button secondary" href="/network">
            View Map
          </Link>
        </article>
        <article className="panel" style={{ padding: "1rem" }}>
          <h2 className="card-title">Founder Distribution</h2>
          <p className="muted">Admins can push distribution and attention updates from one panel.</p>
          <Link className="button secondary" href="/admin">
            Open Admin
          </Link>
        </article>
      </section>
    </div>
  );
}
