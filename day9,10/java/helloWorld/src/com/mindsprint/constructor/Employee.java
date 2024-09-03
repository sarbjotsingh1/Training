package com.mindsprint.constructor;

import java.util.Scanner;

public class Employee {
    int id;
    String name;
    String department;
    Double salary;

    public Employee() {
        System.out.println("Constructor Called");
    }

    public Employee(String name, String department, double salary) {
//        this.id=(int)(Math.random()*100);
//        this.name = name;
//        this.department=department;
//        this.salary=salary;
        this((int) (Math.random() * 100), name, department, salary);
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + id + ", name='" + name + '\'' + ", department='" + department + '\'' + ", salary=" + salary + '}';
    }

    public Employee(int id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    public static void main(String[] args) {
        Employee e1 = new Employee();
        Employee e2 = new Employee(1, "alex", "finance", 100.0);
        Employee e3 = new Employee("bob", "HR", 100.0);
        System.out.println(e2);
    }
}
