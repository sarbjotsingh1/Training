package com.mindsprint.abstraction;

abstract public class Bank {
    private String name;
    private String branch;
    private String address;

    Bank(String name,String branch,String address){
        this.name=name;
        this.branch=branch;
        this.address=address;
    }
    abstract public void getRateOfInterest();

    public String getName() {
        return name;
    }

    public String getBranch() {
        return branch;
    }

    public String getAddress() {
        return address;
    }
}
