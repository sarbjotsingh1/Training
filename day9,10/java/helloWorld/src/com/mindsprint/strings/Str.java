package com.mindsprint.strings;

public class Str {
    public static void main(String[] args) {
        String message = "welcome to the world of strings";
        System.out.print((char) (message.charAt(0) - 32));
        for (int i = 1; i < message.length(); i++) {
            if (message.charAt(i) == ' ') {
                System.out.print(' ');
                System.out.print((char)(message.charAt(i+1)-32));
                i++;
            }
            else
                System.out.print((char) (message.charAt(i)));
            }

        }
    }

