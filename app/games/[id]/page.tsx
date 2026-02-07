import { notFound } from "next/navigation";
import { games } from "@/app/lib/data";

type Props = {
  params: {
    id: string;
  };
};

export default function GameDetailPage({ params }: Props) {
  const game = games.find((item) => item.id === params.id);
  if (!game) {
    notFound();
  }

  return (
    <div className="grid">
      <section className="panel" style={{ padding: "1rem" }}>
        <h1 style={{ marginTop: 0 }}>Game Detail</h1>
        <h2>{game.title}</h2>
        <p className="muted">Status: {game.status}</p>
        <p className="muted">Start: {new Date(game.start).toLocaleString()}</p>
      </section>
      <section className="grid two">
        <article className="panel" style={{ padding: "1rem" }}>
          <h3 className="card-title">Signal Strength</h3>
          <p style={{ fontSize: "1.8rem", marginBottom: 0 }}>{game.strength}%</p>
        </article>
        <article className="panel" style={{ padding: "1rem" }}>
          <h3 className="card-title">Stake Pool</h3>
          <p style={{ fontSize: "1.8rem", marginBottom: 0 }}>{game.stakePool.toLocaleString()} $TOWEL</p>
        </article>
      </section>
    </div>
  );
}
