"use client";

import { FormEvent, useState } from "react";

export default function AdminPage() {
  const [distributionTarget, setDistributionTarget] = useState(2500);
  const [attentionValue, setAttentionValue] = useState(73);
  const [status, setStatus] = useState<string | null>(null);

  function handleDistribute(event: FormEvent) {
    event.preventDefault();
    setStatus(`Queued founder distribution: ${distributionTarget} $TOWEL.`);
  }

  function handleAttention(event: FormEvent) {
    event.preventDefault();
    setStatus(`Published attention update: ${attentionValue}% confidence.`);
  }

  return (
    <div className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Founder Admin Panel</h1>
        <p className="muted">Execute founder distribution and publish network attention updates.</p>
      </section>
      <section className="grid two">
        <form onSubmit={handleDistribute} className="panel" style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}>
          <h2 className="card-title">Distribution Controls</h2>
          <label htmlFor="distribution">$TOWEL Amount</label>
          <input
            id="distribution"
            type="number"
            min={0}
            value={distributionTarget}
            onChange={(e) => setDistributionTarget(Number(e.target.value))}
            style={{ borderRadius: 10, border: "1px solid #345", background: "#071422", color: "var(--text)", padding: "0.55rem" }}
          />
          <button className="button" type="submit">
            Push Distribution
          </button>
        </form>
        <form onSubmit={handleAttention} className="panel" style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}>
          <h2 className="card-title">Attention Controls</h2>
          <label htmlFor="attention">Attention Confidence (%)</label>
          <input
            id="attention"
            type="number"
            min={0}
            max={100}
            value={attentionValue}
            onChange={(e) => setAttentionValue(Number(e.target.value))}
            style={{ borderRadius: 10, border: "1px solid #345", background: "#071422", color: "var(--text)", padding: "0.55rem" }}
          />
          <button className="button" type="submit">
            Publish Update
          </button>
        </form>
      </section>
      {status ? (
        <section className="panel" style={{ padding: "1rem" }}>
          <p style={{ margin: 0 }}>{status}</p>
        </section>
      ) : null}
    </div>
  );
}
