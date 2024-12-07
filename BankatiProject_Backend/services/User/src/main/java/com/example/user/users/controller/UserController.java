package com.example.user.users.controller;

import com.example.user.users.entity.Admin;
import com.example.user.users.request.AdminRequest;
import com.example.user.users.request.AgentRequest;
import com.example.user.users.response.AgentResponse;
import com.example.user.users.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private AdminService service;

    //--------------------------------------Admin-----------------------------------//

    @PostMapping("/addAdmin")
    public ResponseEntity<Admin> saveAdmin(@RequestBody AdminRequest request) {
        return ResponseEntity.ok(service.saveAdmin(request));
    }


    @PostMapping("/addAgent")
    public ResponseEntity<AgentResponse> AddAgent(@RequestBody AgentRequest request){
        return ResponseEntity.ok(service.addAgent(request));
    }


    @GetMapping("/getAgent/{id}")
    public ResponseEntity<AgentResponse> getAgentById(@PathVariable("id") String id) {
        return ResponseEntity.ok(service.findAgentById(id));
    }


    // for updating password also
    @PutMapping("/updateAgent/{id}")
    public ResponseEntity<AgentResponse> updateUser(@RequestBody AgentRequest updatedAgent){
        return ResponseEntity.ok(service.updateAgent(updatedAgent));
    }



    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") String id)  {
        service.delete(id);
    }


    @GetMapping("/listAgent")
    public ResponseEntity<List<AgentResponse>> getAllAgents() {
        return ResponseEntity.ok( service.findAllAgents());
    }


    //--------------------------------------Agent-----------------------------------//




    //--------------------------------------Client-----------------------------------//



}