package com.dinesh.serviceImpl;

import org.springframework.stereotype.Service;

import com.dinesh.model.User;
import com.dinesh.repositary.UserRepositary;
import com.dinesh.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepositary repositary;

    public UserServiceImpl(UserRepositary repositary) {
        this.repositary = repositary;
    }

    @Override
    public User addUserToDB(User user) {
        return repositary.save(user);
    }

    @Override
    public void deleteUserByID(Long id) {
        repositary.deleteById(id);
        System.out.println("User with ID %s is Deleted".formatted(id));
    }

}
