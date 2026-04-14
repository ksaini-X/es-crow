import { createClient } from "@solana/kit-client-litesvm";
import { address } from "@solana/kit";
import * as fs from "node:fs";
import { LiteSVM } from "litesvm";
import path from "node:path";

async function main() {
  const client = await createClient();

  const programId = address("EkeukHD4mGQ3buNej7wfdoWvc7a6tiyGruti1BZvDCRi");
  const soPath = "../escrow-program/target/deploy/escrow_program.so";

  const svm = new LiteSVM();
  // Load the program with the right public key
  svm.addProgramFromFile(programId, "./escrow_program.so");

  console.log(svm);
}

main();
