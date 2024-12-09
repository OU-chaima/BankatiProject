package com.example.servicestiers.walletClient;

public record WalletResponse(
        String id,
        Double balance,
        String clientId,
        BankAccountRequest bankAccountResponse
) {
}