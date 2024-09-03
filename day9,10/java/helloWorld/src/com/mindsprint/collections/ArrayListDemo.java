package com.mindsprint.collections;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListDemo {

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(67);
        list.add(60);
        list.add(6);
        list.add(600);
        System.out.println(list);
        list.remove(2);
        System.out.println(list);
        Iterator<Integer> itr = list.iterator();
        while (itr.hasNext())
            System.out.println(itr.next());
    }

}
