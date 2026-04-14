import { FileText } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const ActiveEscrow = () => {
  return (
    <section className="space-y-6">
      <h3 className="text-xl font-black uppercase inline-block border-b-4 border-accent">
        Active_Escrows
      </h3>

      <div className="border-2 border-foreground bg-card overflow-hidden">
        <div className="bg-foreground text-background p-4 flex justify-between items-center">
          <span className="font-bold uppercase tracking-widest text-sm">
            Escrow_Account #001
          </span>
          <span className="text-xs opacity-70">ID: 882931</span>
        </div>

        <div className="p-6 space-y-6">
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
  );
};

export default ActiveEscrow;
