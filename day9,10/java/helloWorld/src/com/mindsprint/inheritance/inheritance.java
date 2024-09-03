package com.mindsprint.inheritance;

class Person {
    int id;
    String name;

    Person(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public void display() {
        System.out.println(id);
    }
}

class Employee extends Person {
    int empCode;
    String department;

    @Override
    public String toString() {
        return "Employee{" +
                "department='" + department + '\'' +
                ", empCode=" + empCode +
                '}';
    }

    public Employee(int id, String name, int empCode, String department) {
        super(id, name);
        this.empCode = empCode;
        this.department = department;
    }

    public void display() {
        super.display();
        System.out.println(name);
    }
}

public class inheritance {
    public static void main(String[] args) {
        Employee e1 = new Employee(1, "sarb", 123, "IT");
        e1.display();
    }

}
