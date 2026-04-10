use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Milestone {
    pub escrow_pubkey: Pubkey,

    #[max_len(20)]
    pub title: String,
    #[max_len(50)]
    pub description: String,

    pub index: u8,

    pub end_date: i64,
    pub attached_amount: u64,

    pub completed: bool,
    pub accpeted: bool,
    pub disputed: bool,
}
