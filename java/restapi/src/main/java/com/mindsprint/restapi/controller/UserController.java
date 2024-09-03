package com.mindsprint.restapi.controller;

import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService service;

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user){
        return new ResponseEntity<>(service.addUser(user), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll(){
        return new ResponseEntity<>(service.getAll(),HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getById(@PathVariable int id){
        User found = service.getUserById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteByID(@PathVariable int id){
        if(service.deleteById(id))
            return ResponseEntity.ok("user deleted");
        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
    }

//    @PutMapping("{id}")
//    public ResponseEntity<Object> updateById(@RequestBody User user,@PathVariable int id){
//        User found = service.getUserById(id);
//        if(found!=null)
//            return ResponseEntity.ok(found);
//        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
//    }
}
