package com.mindsprint.thowDemo;

import java.util.Scanner;

public class demo {

    public static void check(int age) throws AgeNotValidException {
        if (age < 18)
            throw new AgeNotValidException("Age not Vaid");
        else
            System.out.println("Valid User");
    }

    public static void CheckAge() throws AgeNotValidException {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your age");
        check(scanner.nextInt());
    }

    public static void main(String[] args) {
        try {
            demo.CheckAge();
        } catch (AgeNotValidException e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

    }
}
