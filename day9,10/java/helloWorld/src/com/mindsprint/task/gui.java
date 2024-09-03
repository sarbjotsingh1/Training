package com.mindsprint.task;

import java.util.Scanner;

public class gui {
    public static void main(String[] args) {
        System.out.println("Welcome to IMS");
        Scanner sc = new Scanner(System.in);
        IMS i1 = new IMS();
        while (true) {
            System.out.println("Which action you want to perform : ");
            System.out.println("1.Add Product");
            System.out.println("2.Display Products");
            System.out.println("3.Remove Product");
            System.out.println("4.Search Product");
            System.out.println("5.Exit");

            int action = sc.nextInt();
            switch (action) {
                case 1:
                    System.out.println("Enter Id of product");
                    int id = Integer.parseInt((sc.nextLine()));
                    System.out.println("Enter name of product");
                    String name = sc.nextLine();
                    System.out.println("Enter Price of product");
                    double price = Integer.parseInt(sc.nextLine());
                    Product p1 = new Product(id,name,price);
                    break;
                case 2 :
                    i1.display();
                    break;
                case 3 :
                    System.out.print("Product id which you want to remove : ");
                    int removeId = sc.nextInt();
                    i1.removeProduct(removeId);
                    break;
                case 4:
                    System.out.println("Product name which you want to search");
                    String pName = sc.nextLine();
                    i1.searchProduct(pName);
                    break;
                case 5 :
                    System.exit(0);

            }

        }


    }
}
