
use anchor_lang::prelude::*;
use crate::state::{Escrow, Milestone};

#[derive(Accounts)]
#[instruction(index:u8,id:u64)]
pub struct MilestoneMarkAccepted<'info> {
    #[account(mut)]
    pub creator: Signer<'info>, 
    #[account(
        mut, 
        seeds  = [b"escrow", creator.key().as_ref(), &id.to_le_bytes() ],
        bump 
    )]
    pub escrow: Account<'info, Escrow>,
    #[account(
        mut,
        seeds  = [b"milestone", escrow.key().as_ref(), &index.to_le_bytes() ], 
        bump
    )]
    pub milestone : Account<'info, Milestone>, 
    pub system_program: Program<'info, System>
}
