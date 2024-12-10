package com.example.transactionservice.servicesTiersClient;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(
        name = "servicestiers-service",
        url = "${application.config.servicestiers-url}"
)
public interface ServicesTiersClient {
     @GetMapping("/doTransaction")
    TiersClientResponse doTransaction(@RequestBody TiersClientRequest tiersClientRequest);
}
