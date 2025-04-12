package com.example.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@SpringBootApplication
@RestController
@RequestMapping("/users")
public class UserServiceApplication {

    private List<String> users = new ArrayList<>(List.of("Alice", "Bob", "Charlie"));

    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }

    @GetMapping
    public List<String> getUsers() {
        return users;
    }
}