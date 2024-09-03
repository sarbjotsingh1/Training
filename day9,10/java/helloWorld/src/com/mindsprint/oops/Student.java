package com.mindsprint.oops;

public class Student {
    int id;
    String name;
    String email;
    String country;

    public void setData (int id,String name,String email,String country){
        this.id = id;
        this.name =name;
        this.email=email;
        this.country=country;
    }
    public void display(){
        System.out.println(id);
        System.out.println(name);
        System.out.println(email);
        System.out.println(country);
    }


}
