package com.mindsprint.task;

import java.util.ArrayList;
import java.util.List;

public class IMS {
    List<Product> list;

    public IMS() {
        list = new ArrayList<>();
    }


    public void addProduct(Product p) {
        list.add(p);
        System.out.println("Product added");
    }

    public void removeProduct(int id) {
        Product found = null;
        boolean flag = false;
        for (Product p : list) {
            if (p.getProductId() == id) {
                found = p;
                flag = true;
                break;
            }
        }
        if (flag) {
            list.remove(found);
            System.out.println("Product removed");
        } else {
            System.out.println("Product not found");
        }
    }

    public void display() {
        if (list.isEmpty())
            System.out.println("No product");
        else {
            System.out.println("Here are products");
            for (Product p : list) {
                System.out.println(p);
            }
        }
    }
    public void searchProduct(String name){
        Product found = null;
        boolean flag = false;
        for (Product p : list) {
            if (p.getName().equals(name)) {
                found = p;
                flag = true;
                break;
            }
        }
        if (flag) {
            System.out.println(found);
        } else {
            System.out.println("Product not found");
        }
    }

}
