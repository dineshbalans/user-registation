package com.dinesh.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dinesh.model.User;

@Repository
public interface UserRepositary extends JpaRepository<User, Long> {

}
