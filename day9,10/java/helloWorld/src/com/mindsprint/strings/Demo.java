package com.mindsprint.strings;

public class Demo {
    public static void main(String[] args) {
        String s1 = "Hello Word";
        String s2 = "Hello Word";
        String s3 = new String("Hello Word");

        System.out.println(s1==s2);
        System.out.println(s2==s3);
        System.out.println(s1.equals(s3)) ;
    }
}
