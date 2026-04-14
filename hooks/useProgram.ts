"use client";
import * as anchor from "@coral-xyz/anchor";
import {
  AnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import idl from "@/escrow-program/target/idl/escrow_program.json";
import { EscrowProgram } from "@/escrow-program/target/types/escrow_program";
import { useMemo } from "react";
import { PublicKey } from "@solana/web3.js";

export default function useProgram() {
  const wallet = useWallet() as AnchorWallet;
  const { connection } = useConnection();
  const program = useMemo(() => {
    const provider = new anchor.AnchorProvider(connection, wallet);
    const program: anchor.Program<EscrowProgram> = new anchor.Program(
      idl,
      provider,
    );
    return program;
  }, [connection, wallet]);
  return { program, PROGRAM_ID: new PublicKey(idl.address) };
}
