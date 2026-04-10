use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Escrow {
    pub receiver: Pubkey,
    pub creator: Pubkey,

    pub total_amount: u64,

    pub claimed_amount: u64,
    pub claimable_amount: u64,

    pub total_milestone: u8,
    pub id: u64,
}
