package com.mindsprint.abstraction;

public class Sbi extends Bank {

    Sbi(String name, String branch, String address) {
        super(name, branch, address);
    }

    @Override
    public void getRateOfInterest() {
        System.out.println("Rate of interest is : "+10+"%" );
    }
}
