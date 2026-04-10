use anchor_lang::error_code;

#[error_code]
pub enum CustomError {
    #[msg("Time limit exceeded")]
    TimeExceeded,
    #[msg("Invalid claim")]
    InvalidClaim,
}
