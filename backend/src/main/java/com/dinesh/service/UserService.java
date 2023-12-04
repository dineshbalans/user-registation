package com.dinesh.service;

import java.util.List;

import com.dinesh.model.User;

public interface UserService {
    public List<User> getAllUsers();
    public User getUserByID(Long id);
    public User addUserToDB(User user);
    public void deleteUserByID(Long id);
}
