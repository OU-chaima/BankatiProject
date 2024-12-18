package com.example.virtualcard.virtualcard.controller;

import com.example.virtualcard.virtualcard.entity.VirtualCard;
import com.example.virtualcard.virtualcard.service.VirtualCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/virtualcard")
@RequiredArgsConstructor
public class VirtualCardController {
    @Autowired
    private VirtualCardService virtualCardService;

    // Créer une carte virtuelle
    @PostMapping("/create/{userId}")
    public VirtualCard createCard(@PathVariable String userId) {
        return virtualCardService.createVirtualCard(userId);
    }

    // Activer une carte virtuelle
    @PatchMapping("/activate/{cardId}")
    public VirtualCard activateCard(@PathVariable String cardId) {
        return virtualCardService.activateCard(cardId);
    }

    // Désactiver une carte virtuelle
    @PatchMapping("/deactivate/{cardId}")
    public VirtualCard deactivateCard(@PathVariable String cardId) {
        return virtualCardService.deactivateCard(cardId);
    }

    // Obtenir toutes les cartes d'un utilisateur
    @GetMapping("/user/{userId}")
    public List<VirtualCard> getCardsByUser(@PathVariable String userId) {
        return virtualCardService.getCardsByUserId(userId);
    }
}
