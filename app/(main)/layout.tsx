"use client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import Appbar from "@/components/appbar";
export default function Mainlayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConnectionProvider endpoint={"http://127.0.0.1:8899"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="max-w-6xl mx-auto flex flex-col min-h-screen relative">
            <Appbar />
            <main className="pt-10">{children}</main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
