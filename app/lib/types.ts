export type SeasonState =
  | "not_connected"
  | "connected_no_towel"
  | "active_staker"
  | "season_complete_claimable";

export type Game = {
  id: string;
  title: string;
  start: string;
  status: "upcoming" | "live" | "ended";
  strength: number;
  stakePool: number;
};
