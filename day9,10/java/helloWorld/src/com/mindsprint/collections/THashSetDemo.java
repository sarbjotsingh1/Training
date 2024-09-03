package com.mindsprint.collections;

import java.util.Set;

public class THashSetDemo {

    public static void main(String[] args) {
        Set<String> set = new java.util.TreeSet<>();
        set.add("alex");
        set.add("jack");
        set.add("john");
        set.add("tracy");
        set.add("alex");
        set.add(null);


        System.out.println(set);
    }


}
