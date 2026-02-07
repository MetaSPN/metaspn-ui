import { Game } from "@/app/lib/types";

export const games: Game[] = [
  {
    id: "g-101",
    title: "Mavs @ Suns",
    start: "2026-02-08T02:30:00Z",
    status: "live",
    strength: 87,
    stakePool: 21640
  },
  {
    id: "g-102",
    title: "Lakers @ Warriors",
    start: "2026-02-08T03:00:00Z",
    status: "upcoming",
    strength: 78,
    stakePool: 18290
  },
  {
    id: "g-103",
    title: "Heat @ Knicks",
    start: "2026-02-06T01:00:00Z",
    status: "ended",
    strength: 65,
    stakePool: 14920
  }
];
