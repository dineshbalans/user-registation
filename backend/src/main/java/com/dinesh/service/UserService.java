package com.dinesh.service;

import com.dinesh.model.User;

public interface UserService {
    public User addUserToDB(User user);
    public void deleteUserByID(Long id);
}
