package com.mindsprint.abstraction;

public class Icici extends Bank{

    Icici(String name, String branch, String address) {
        super(name, branch, address);
    }

    @Override
    public void getRateOfInterest() {
        System.out.println("Rate of interest is : "+11+"%" );

    }
}
