"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Calendar, DollarSign, FileText } from "lucide-react";

export default function UserPage() {
  const [showForm, setShowForm] = useState(false);
  const [milestones, setMilestones] = useState([
    { title: "", description: "", amount: "", endDate: "" },
  ]);

  const addMilestone = () => {
    setMilestones([
      ...milestones,
      { title: "", description: "", amount: "", endDate: "" },
    ]);
  };

  const removeMilestone = (index: number) => {
    setMilestones(milestones.filter((_, i) => i !== index));
  };

  return (
    <div className=" bg-background font-mono text-foreground p-4">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Header Metadata */}
        <div className="border-b-2 border-foreground/20 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Protocol Terminal
            </h2>
            <h1 className="text-3xl font-black uppercase">Depositor_Portal</h1>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="rounded-none border-2 border-foreground bg-accent text-accent-foreground font-bold hover:bg-foreground hover:text-background transition-none h-12 px-6"
          >
            {showForm ? "[ X ] ABORT_CREATION" : "[ + ] INITIALIZE_NEW_ESCROW"}
          </Button>
        </div>

        {showForm && (
          <section className="border-4 border-foreground bg-card p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-top-4">
            <div className="mb-8 border-b border-foreground/10 pb-4">
              <h3 className="text-xl font-black uppercase">
                Initialize Escrow Account
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Populating Escrow & Milestone Data Structures
              </p>
            </div>

            <div className="space-y-8">
              {/* Core Escrow Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent" /> Beneficiary Pubkey
                    (Receiver)
                  </label>
                  <Input
                    placeholder="Enter Solana Address..."
                    className="rounded-none border-2 border-foreground bg-background focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent" /> Escrow ID (u64)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g. 101"
                    className="rounded-none border-2 border-foreground bg-background"
                  />
                </div>
              </div>

              {/* Dynamic Milestones Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-black uppercase tracking-widest">
                    Milestone Configuration
                  </h4>
                  <span className="text-[10px] bg-foreground text-background px-2 py-1">
                    Count: {milestones.length}
                  </span>
                </div>

                {milestones.map((ms, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-foreground p-4 bg-background relative space-y-4"
                  >
                    <div className="absolute -left-3 top-4 bg-foreground text-background text-[10px] px-1 py-2 [writing-mode:vertical-lr] rotate-180">
                      MS_{idx + 1}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
                      <div className="md:col-span-2">
                        <Input
                          placeholder="Milestone Title (max 20 chars)"
                          className="rounded-none border-b-2 border-x-0 border-t-0 border-foreground bg-transparent px-0"
                        />
                      </div>
                      <div>
                        <div className="relative">
                          <DollarSign className="absolute left-2 top-2.5 w-4 h-4 opacity-50" />
                          <Input
                            placeholder="Amount (SOL)"
                            className="pl-8 rounded-none border-2 border-foreground bg-background"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-4">
                      <div className="md:col-span-2">
                        <textarea
                          placeholder="Description (max 50 chars)"
                          rows={1}
                          className="w-full bg-transparent border-b-2 border-foreground p-1 text-sm focus:outline-none"
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-2 top-2.5 w-4 h-4 opacity-50" />
                        <Input
                          type="date"
                          className="pl-8 rounded-none border-2 border-foreground bg-background"
                        />
                      </div>
                    </div>

                    {milestones.length > 1 && (
                      <button
                        onClick={() => removeMilestone(idx)}
                        className="absolute -right-3 -top-3 bg-destructive p-1 border-2 border-foreground hover:translate-x-1 transition-transform"
                      >
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </div>
                ))}

                <Button
                  onClick={addMilestone}
                  variant="outline"
                  className="w-full border-2 border-dashed border-foreground/30 hover:border-accent hover:bg-accent/5 transition-all rounded-none font-bold py-6"
                >
                  <Plus className="mr-2 w-4 h-4" /> ATTACH_NEW_MILESTONE
                </Button>
              </div>

              <Button className="w-full h-16 bg-foreground text-background font-black text-lg rounded-none hover:bg-accent hover:text-accent-foreground transition-colors shadow-[4px_4px_0px_0px_rgba(139,115,85,1)]">
                LOCK_FUNDS_AND_INITIALIZE_PDA
              </Button>
            </div>
          </section>
        )}

        {/* Active Escrow Display - Matches Escrow Account Structure */}
        <section className="space-y-6">
          <h3 className="text-xl font-black uppercase inline-block border-b-4 border-accent">
            Active_Protocols
          </h3>

          <div className="border-2 border-foreground bg-card overflow-hidden">
            <div className="bg-foreground text-background p-4 flex justify-between items-center">
              <span className="font-bold uppercase tracking-widest text-sm">
                Escrow_Account #001
              </span>
              <span className="text-xs opacity-70">ID: 882931</span>
            </div>

            <div className="p-6 space-y-6">
              {/* Account State Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="border-r border-foreground/10 last:border-0">
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Total_Amount
                  </p>
                  <p className="font-black text-xl">10.0 SOL</p>
                </div>
                <div className="border-r border-foreground/10 last:border-0">
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Claimable
                  </p>
                  <p className="font-black text-xl text-accent">2.5 SOL</p>
                </div>
                <div className="border-r border-foreground/10 last:border-0">
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Claimed
                  </p>
                  <p className="font-black text-xl">0.0 SOL</p>
                </div>
                <div className="last:border-0">
                  <p className="text-[10px] text-muted-foreground uppercase">
                    Milestones
                  </p>
                  <p className="font-black text-xl">04</p>
                </div>
              </div>

              {/* Milestone Tracking List */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-muted-foreground">
                  <FileText className="w-3 h-3" /> Execution Sequence
                </div>

                {[1, 2].map((m) => (
                  <div
                    key={m}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-4 border-2 border-foreground/20 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center font-black text-xs">
                        {m}
                      </div>
                      <div>
                        <h5 className="font-bold uppercase text-sm">
                          UI/UX Design Concept
                        </h5>
                        <p className="text-[10px] text-muted-foreground">
                          End: 2024-05-10 | PDA_ATTACHED: 2.5 SOL
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button className="h-8 rounded-none bg-accent text-accent-foreground text-[10px] font-bold px-4">
                        APPROVE_RELEASE
                      </Button>
                      <Button
                        variant="outline"
                        className="h-8 rounded-none border-2 border-foreground text-[10px] font-bold px-4"
                      >
                        OPEN_DISPUTE
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
