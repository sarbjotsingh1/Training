package com.mindsprint.collections;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;

public class LLDemo {

    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();
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
