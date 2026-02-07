"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { SeasonState } from "@/app/lib/types";

type SeasonContextType = {
  seasonState: SeasonState;
  towelBalance: number;
  seasonPoints: number;
  claimableRewards: number;
  simulateAcquireTowel: () => void;
  simulateStake: () => void;
  simulateCompleteSeason: () => void;
  simulateClaim: () => void;
};

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export function SeasonStateProvider({ children }: PropsWithChildren) {
  const { connected } = useWallet();
  const [towelBalance, setTowelBalance] = useState(0);
  const [seasonPoints, setSeasonPoints] = useState(0);
  const [claimableRewards, setClaimableRewards] = useState(0);

  const seasonState: SeasonState = useMemo(() => {
    if (!connected) {
      return "not_connected";
    }
    if (claimableRewards > 0) {
      return "season_complete_claimable";
    }
    if (seasonPoints > 0) {
      return "active_staker";
    }
    return towelBalance > 0 ? "active_staker" : "connected_no_towel";
  }, [claimableRewards, connected, seasonPoints, towelBalance]);

  const value: SeasonContextType = {
    seasonState,
    towelBalance,
    seasonPoints,
    claimableRewards,
    simulateAcquireTowel: () => setTowelBalance((current) => current + 250),
    simulateStake: () => {
      setTowelBalance((current) => Math.max(0, current - 100));
      setSeasonPoints((current) => current + 580);
    },
    simulateCompleteSeason: () => setClaimableRewards(42.8),
    simulateClaim: () => {
      setClaimableRewards(0);
      setSeasonPoints(0);
    }
  };

  return <SeasonContext.Provider value={value}>{children}</SeasonContext.Provider>;
}

export function useSeasonState() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error("useSeasonState must be used within SeasonStateProvider");
  }
  return context;
}
