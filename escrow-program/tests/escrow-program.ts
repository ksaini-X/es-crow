import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { EscrowProgram } from "../target/types/escrow_program";

describe("escrow-program", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.escrowProgram as Program<EscrowProgram>;

  it("Is initialized!", async () => {
    console.log(program);
    // Add your test here.
  });
});
