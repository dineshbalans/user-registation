package com.dinesh.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dinesh.model.User;
import com.dinesh.service.UserService;

@RestController
@CrossOrigin()
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public List<User> getUsersList() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public User getUserWithID(@PathVariable Long id) {
        return userService.getUserByID(id);
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        System.out.println(user.toString());
        User userInDB = userService.addUserToDB(user);
        System.out.println(userInDB.toString());
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUserByID(id);
    }
}
