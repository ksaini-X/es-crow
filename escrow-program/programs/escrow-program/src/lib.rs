use anchor_lang::prelude::*;

declare_id!("4GBQt8KLH1Qhsfxa4J8s4EQSPFgKy17jk2oxgUWoUszb");

pub mod error;
pub mod instructions;
pub mod state;
use error::CustomError;
use instructions::*;

#[program]
pub mod escrow_program {
    use super::*;
    use anchor_lang::system_program::{self, Transfer};

    pub fn init_escrow(
        ctx: Context<InitEscrow>,
        receiver: Pubkey,
        total_amount: u64,
        id: u64,
    ) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);

        system_program::transfer(
            CpiContext::new(
                ctx.accounts.system_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.creator.to_account_info(),
                    to: ctx.accounts.escrow.to_account_info(),
                },
            ),
            total_amount,
        )?;
        let escrow = &mut ctx.accounts.escrow;

        escrow.claimed_amount = 0;
        escrow.claimable_amount = 0;
        escrow.total_amount = total_amount;
        escrow.receiver = receiver;
        escrow.id = id;

        escrow.creator = *ctx.accounts.creator.key;
        escrow.total_milestone = 0;

        Ok(())
    }

    pub fn init_milestone(
        ctx: Context<InitMilestone>,
        escrow: Pubkey,
        _id: u64,
        index: u8,
        title: String,
        description: String,
        end_date: i64,
        attached_amount: u64,
    ) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        let milestone = &mut ctx.accounts.milestone;
        milestone.description = description;
        milestone.title = title;
        milestone.end_date = end_date;
        milestone.attached_amount = attached_amount;
        milestone.index = index;
        milestone.escrow_pubkey = escrow;

        milestone.completed = false;
        milestone.accpeted = false;
        milestone.disputed = false;

        Ok(())
    }
    pub fn mark_completed(
        ctx: Context<MilestoneMarkCompleted>,
        _creator: Pubkey,
        _id: u64,
        _index: u8,
    ) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        let milestone = &mut ctx.accounts.milestone;
        let now = Clock::get()?.unix_timestamp;
        require!(now < milestone.end_date, CustomError::TimeExceeded);

        milestone.completed = true;

        Ok(())
    }
    pub fn mark_accepted(ctx: Context<MilestoneMarkAccepted>, _id: u64, _index: u8) -> Result<()> {
        let milestone = &mut ctx.accounts.milestone;
        let esrow = &mut ctx.accounts.escrow;
        let now = Clock::get()?.unix_timestamp;
        require!(now < milestone.end_date, CustomError::TimeExceeded);

        milestone.accpeted = true;
        esrow.claimable_amount += milestone.attached_amount;

        Ok(())
    }
    pub fn mark_disputed(ctx: Context<MilestoneMarkDisputed>, _id: u64, _index: u8) -> Result<()> {
        let milestone = &mut ctx.accounts.milestone;
        let now = Clock::get()?.unix_timestamp;
        require!(now < milestone.end_date, CustomError::TimeExceeded);

        milestone.disputed = true;

        Ok(())
    }

    pub fn claim(ctx: Context<Claim>, creator: Pubkey, id: u64, _index: u8) -> Result<()> {
        let milestone = &mut ctx.accounts.milestone;
        require!(milestone.accpeted, CustomError::InvalidClaim);

        system_program::transfer(
            CpiContext::new_with_signer(
                ctx.accounts.system_program.to_account_info(),
                Transfer {
                    from: ctx.accounts.escrow.to_account_info(),
                    to: ctx.accounts.receiver.to_account_info(),
                },
                &[&[b"escrow", creator.key().as_ref(), &id.to_le_bytes()]],
            ),
            ctx.accounts.escrow.claimable_amount,
        )?;

        ctx.accounts.escrow.claimable_amount += ctx.accounts.escrow.claimable_amount;
        ctx.accounts.escrow.claimable_amount = 0;

        Ok(())
    }
}
