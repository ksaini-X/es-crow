use anchor_lang::prelude::*;
use crate::state::Escrow;

#[derive(Accounts)]
#[instruction(id:u64)]
pub struct InitEscrow<'info> {
    #[account(mut)]
    pub creator: Signer<'info>, 
    #[account(
        init, 
        payer = creator, 
        space = 8 + Escrow::INIT_SPACE, 
        seeds  = [b"escrow", creator.key().as_ref(), &id.to_le_bytes()], 
        bump
    )]
    pub escrow : Account<'info, Escrow>, 
    pub system_program: Program<'info, System>
}



