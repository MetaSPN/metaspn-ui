import type { Metadata } from "next";
import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { SolanaProvider } from "@/app/components/solana-provider";
import { SeasonStateProvider } from "@/app/components/season-state-provider";
import { TopNav } from "@/app/components/top-nav";
import { FounderStakeBar } from "@/app/components/founder-stake-bar";

export const metadata: Metadata = {
  title: "MetaSPN Season 1",
  description: "Wallet-based staking and signal map flows for MetaSPN Season 1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SolanaProvider>
          <SeasonStateProvider>
            <TopNav />
            <main>{children}</main>
            <FounderStakeBar />
          </SeasonStateProvider>
        </SolanaProvider>
      </body>
    </html>
  );
}
