package com.mindsprint.hello;

public class array {
    public static void main(String[] args) {
        int[] num = {1,2,3,4,5};
        String[] names = {"a","b","c","d"};
        for(int i = 0;i<num.length;i++){
            System.out.print(num[i]);
        }
        System.out.println(" ");
        //
        for(String name:names){
            System.out.print(name);
        }

    }
}
