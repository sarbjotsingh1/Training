package com.mindsprint.collections;

import java.util.Set;

public class HashSet {

    public static void main(String[] args) {
        Set<String> set = new java.util.HashSet<>();
        set.add("alex");
        set.add("jack");
        set.add("john");
        set.add("tracy");
        set.add(null);
        set.add("alex");

        System.out.println(set);
    }


}
