﻿namespace Furdega.Services.Accounts.Dtos
{
    public class ChangePasswordRequest
    {
        public string Login { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}