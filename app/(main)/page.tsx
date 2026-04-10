"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <section className="relative flex items-center justify-center bg-background">
      <div className="relative z-10 max-w-5xl w-full border-2 border-foreground p-6 md:p-12 bg-background shadow-[12px_12px_0px_0px_rgba(139,115,85,0.3)]">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Trustless <br />
            <span className="text-accent underline decoration-4 underline-offset-8">
              Payments.
            </span>
          </h1>
          {/* Body Text as a "Clause" */}
          <div className="max-w-xl space-y-4">
            <p className="text-lg md:text-xl font-medium leading-tight">
              A minimalist escrow architecture. Funds are programmatically
              locked until verification. No middlemen. No deviation.
            </p>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              [CLAUSE 01]: Funds are held in a Program Derived Address (PDA).
              Neither party can circumvent the logic once initialized.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-2 border-foreground">
            <Link href="/deposit" className="group">
              <Button className="w-full h-24 text-xl font-bold uppercase rounded-none bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-b-2 sm:border-b-0 sm:border-r-2 border-foreground transition-none">
                <div className="flex flex-col items-center">
                  <span>Initiate Deposit</span>
                  <span className="text-[10px] font-mono font-normal mt-1 opacity-70">
                    [Role: Depositor]
                  </span>
                </div>
              </Button>
            </Link>

            <Link href="/beneficiary" className="group">
              <Button className="w-full h-24 text-xl font-bold uppercase rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-none">
                <div className="flex flex-col items-center">
                  <span>Claim Payment</span>
                  <span className="text-[10px] font-mono font-normal mt-1 opacity-70">
                    [Role: Beneficiary]
                  </span>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
