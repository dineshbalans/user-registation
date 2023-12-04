package com.dinesh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext run = SpringApplication.run(BackendApplication.class, args);
		System.out.println(run.getBeanDefinitionCount());
		System.out.println("dinesh".toUpperCase());
	}
}
