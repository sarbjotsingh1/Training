package com.mindsprint.task;

import java.util.Scanner;

public class activity1 {


    public static void main(String[] args) {
        tableOf10();
        fibonacci();
        oddOrEven();
        largestTwo();
        sortedArr();
        reverseArr();
    }

    private static void reverseArr() {
        System.out.println("Reverse Array");
        int[] arr = {1, 2, 3, 4};
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.println(arr[i]);
        }
    }

    private static void sortedArr() {
        System.out.println("Sorted Array");
        int[] arr = {1, 4, 3, 2};
        int n = arr.length;
        int temp = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 1; j < (n - i); j++) {
                if (arr[j - 1] > arr[j]) {
                    //swap elements
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }

            }
        }
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    private static void largestTwo() {
        System.out.println("Largest Two");
        System.out.println("Enter Number one");
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        System.out.println("Enter Number Two");
        int num2 = scanner.nextInt();

        if (num1 > num2)
            System.out.println(num1 + " is bigger than " + num2);
        else
            System.out.println(num2 + " is bigger than " + num1);

    }

    private static void oddOrEven() {
        System.out.println("Odd or even");
        System.out.println("Enter a number:");
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        if (num % 2 == 0)
            System.out.println(num + " is a even number");
        else
            System.out.println(num + " is a odd number");
    }

    private static void fibonacci() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number till which you want fibonacci");
        int count = scanner.nextInt();
        int n1 = 0, n2 = 1, n3, i;
        System.out.print(n1 + " " + n2);

        for (i = 2; i < count; ++i) {
            n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
        }

    }

    private static void tableOf10() {
        System.out.println("Table of 10");
        for (int i = 1; i <= 10; i++) {
            System.out.println(10 + "\t" + "*" + "\t" + "=" + "\t" + (i * 10));
        }
    }


}
