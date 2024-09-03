package com.mindsprint.thowDemo;

public class AgeNotValidException extends Exception {
    AgeNotValidException() {
        super("Age is not valid Exception");
    }

    AgeNotValidException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return "AgeNotValidException{}" + super.toString();
    }
}
