package com.mindsprint.collections;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class MapDemo {
    public static void main(String[] args) {
        Map<Integer,String> map = new HashMap<>();
        map.put(10,"ten");
        map.put(11,"ten11");
        map.put(13,"ten13");
        map.put(12,"ten2");
        Set<Map.Entry<Integer,String>> set = map.entrySet();
        Iterator<Map.Entry<Integer,String>> itr = set.iterator();
        while(itr.hasNext()){
            Map.Entry<Integer,String> entry = itr.next();
            System.out.println(entry.getKey()+" "+entry.getValue());
        }


    }
}
