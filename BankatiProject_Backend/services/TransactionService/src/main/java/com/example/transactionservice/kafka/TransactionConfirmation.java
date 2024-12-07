package com.example.transactionservice.kafka;

import com.example.transactionservice.transaction.entity.TransactionMethod;
import com.example.transactionservice.transaction.entity.TransactionStatus;
import com.example.transactionservice.transaction.entity.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record TransactionConfirmation(
        String transactionId, // ID unique de la transaction
        BigDecimal amount, // Montant
        TransactionMethod transactionMethod, // Méthode de transaction
        TransactionType transactionType, // Type de transaction (paiement, transfert, etc.)
        TransactionStatus transactionStatus, // Statut de la transaction
        String currency, // Devise utilisée
        String beneficiaryName,
        String beneficiaryPhone,
        String senderName,
        String senderPhoneNumber,
        LocalDateTime timestamp
) {
}
