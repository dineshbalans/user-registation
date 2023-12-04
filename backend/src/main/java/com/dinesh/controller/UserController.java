package com.dinesh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dinesh.model.User;
import com.dinesh.service.UserService;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String testApp() {
        return "user test";
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        User userInDB = userService.addUserToDB(user);
        System.out.println(userInDB.toString());
    }

    @DeleteMapping("/register/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUserByID(id);
    }
}
