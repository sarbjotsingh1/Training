package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

public class Student {
    private int id;
    private String name;
    private String email;
    private Address address;

    @Autowired

    public Student() {
    }

    public Student(int id, String name, String email, Address address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                '}';
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    @Value("12")
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    @Value("Sarb")
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    @Value("Sarb@gmail.com")
    public void setEmail(String email) {
        this.email = email;
    }
}
