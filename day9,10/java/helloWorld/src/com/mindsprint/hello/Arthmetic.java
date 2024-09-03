package com.mindsprint.hello;

import java.util.Scanner;

public class Arthmetic {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter first num");
        int num1 = scanner.nextInt();
        System.out.println("Enter second num");
        int num2 = scanner.nextInt();
        System.out.println(num1+num2);
    }
}
