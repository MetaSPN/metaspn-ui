export type ChainConfig = {
  rpcUrl: string;
  programId: string;
};

export function getSeason1ChainConfig(): ChainConfig {
  return {
    rpcUrl: "https://api.devnet.solana.com",
    programId: "MetaSPN111111111111111111111111111111111111"
  };
}

export function getDependencyLocations() {
  return {
    chain: "/Users/leoguinan/MetaSPN/metaspn-chain",
    store: "/Users/leoguinan/MetaSPN/metaspn-store",
    schemas: "/Users/leoguinan/MetaSPN/metaspn-schemas"
  };
}
