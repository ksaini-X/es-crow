"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

export default function BeneficiaryPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-background font-mono text-foreground p-4">
      <main className="max-w-4xl mx-auto space-y-10">
        {/* Header Metadata */}
        <div className="border-b-2 border-foreground/20 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Protocol Terminal
            </h2>
            <h1 className="text-3xl font-black uppercase">
              Beneficiary_Portal
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] uppercase text-muted-foreground">
              Connected_As
            </p>
            <p className="text-xs font-bold">4n8R...kP2L</p>
          </div>
        </div>

        {/* Financial Overview (Struct: Escrow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
            <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">
              Total_Contract_Value
            </p>
            <p className="text-3xl font-black">12.50 SOL</p>
          </div>
          <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-foreground bg-accent/10">
            <p className="text-[10px] uppercase font-bold text-accent mb-1">
              Claimable_Now (PDA)
            </p>
            <p className="text-3xl font-black text-accent">3.25 SOL</p>
            <Button className="mt-4 w-full rounded-none bg-accent text-accent-foreground font-black text-xs hover:bg-foreground transition-none">
              WITHDRAW_TO_WALLET
            </Button>
          </div>
          <div className="p-6">
            <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">
              Claimed_To_Date
            </p>
            <p className="text-3xl font-black opacity-40">9.25 SOL</p>
          </div>
        </div>

        {/* Active Contracts Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-4 border-foreground pb-2">
            <h3 className="text-xl font-black uppercase">Pending_Milestones</h3>
            <span className="text-xs font-bold bg-foreground text-background px-2">
              STRUCT: MILESTONE_ACC
            </span>
          </div>

          {/* Contract Card */}
          <div className="border-2 border-foreground bg-background">
            {/* Contract Header */}
            <div className="p-4 border-b-2 border-foreground flex justify-between items-center bg-secondary/30">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Escrow_Link: #001
                </span>
                <h4 className="font-black text-lg uppercase tracking-tighter">
                  Full_Stack_Deployment
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] block text-muted-foreground uppercase">
                  Depositor_Pubkey
                </span>
                <span className="text-xs font-bold">7kL3...9mQ5</span>
              </div>
            </div>

            {/* Milestone List (Mapping through Milestone Structs) */}
            <div className="divide-y-2 divide-foreground/10">
              {/* Milestone Row: READY FOR SUBMISSION */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-accent/5 transition-colors">
                <div className="md:col-span-1">
                  <span className="text-2xl font-black opacity-20 italic">
                    03
                  </span>
                </div>
                <div className="md:col-span-5 space-y-1">
                  <div className="flex items-center gap-2">
                    <h5 className="font-black text-sm uppercase">
                      API_Integration_v2
                    </h5>
                    <span className="text-[8px] border border-foreground px-1 font-bold italic">
                      PENDING
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Implement Stripe webhooks and Solana Pay adapters.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">
                    Attached_Amount
                  </p>
                  <p className="font-black text-sm">2.00 SOL</p>
                </div>
                <div className="md:col-span-3">
                  <Button className="w-full rounded-none border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-bold text-[10px] h-10 transition-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    SUBMIT_FOR_REVIEW
                  </Button>
                </div>
              </div>

              {/* Milestone Row: DISPUTED STATE */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-destructive/5">
                <div className="md:col-span-1">
                  <span className="text-2xl font-black opacity-20 italic">
                    02
                  </span>
                </div>
                <div className="md:col-span-5 space-y-1">
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="w-3 h-3" />
                    <h5 className="font-black text-sm uppercase">
                      UI_Component_Library
                    </h5>
                    <span className="text-[8px] bg-destructive text-white px-1 font-bold">
                      DISPUTED
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Milestone rejected by Depositor. Awaiting arbitration.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">
                    Locked_Value
                  </p>
                  <p className="font-black text-sm">1.50 SOL</p>
                </div>
                <div className="md:col-span-3">
                  <Button
                    variant="outline"
                    className="w-full rounded-none border-2 border-destructive/50 text-destructive font-bold text-[10px] h-10 hover:bg-destructive hover:text-white"
                  >
                    VIEW_DISPUTE_LOGS
                  </Button>
                </div>
              </div>

              {/* Milestone Row: COMPLETED/CLAIMED */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center opacity-60 grayscale">
                <div className="md:col-span-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="md:col-span-5 space-y-1">
                  <h5 className="font-black text-sm uppercase line-through">
                    Architecture_Setup
                  </h5>
                  <p className="text-xs text-muted-foreground">
                    PDA successfully initialized and verified.
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">
                    Payout_Verified
                  </p>
                  <p className="font-black text-sm">5.75 SOL</p>
                </div>
                <div className="md:col-span-3 text-right">
                  <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-800 px-2 py-1">
                    Success_Tx
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
