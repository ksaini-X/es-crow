"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";
import { useEffect, useState } from "react";

const Appbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;
  return (
    <header className="w-full bg-background border-b-4 border-foreground relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent flex items-center justify-center font-black text-background">
              E
            </div>
            <h1 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-foreground">
              Escrow<span className="animate-pulse">_</span>
            </h1>
          </div>
        </Link>

        <WalletMultiButton />
      </div>

      <div className="absolute bottom-1 left-0 w-full h-[1px] bg-foreground/10" />
    </header>
  );
};

export default Appbar;
