package com.mindsprint.abstraction;

public class Main {
    public static void main(String[] args) {
        Bank bank1 = new Sbi("Sbi","New Mumbai","Mumbai");
        bank1.getRateOfInterest();
        Bank bank2 = new Icici("Icici","New Mumbai","Mumbai");
        bank2.getRateOfInterest();
    }
}
