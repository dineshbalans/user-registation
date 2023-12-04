package com.dinesh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String email;
    private String password;
    private String fullName;
    private String fatherName;
    private String dob;
    private String phoneNo;
    private String education;
    private String occupation;
    private String country;
    private String state;
    private String district;
    private String taluk;
    private String postCode;
    private String addressOne;
    private String addressTwo;
    private String fullTime;
    private String partTimeCheckBox;
    private String partTime;
    private String weeklyCheckBox;
    private String weekly;
    private String monthlyCheckBox;
    private String monthly;
    private String specialDayCheckBox;
    private String specialDay;
    private String farmer;
    private String educ;
    private String health;
    private String naturalCalmaity;
    private String tree;
}
