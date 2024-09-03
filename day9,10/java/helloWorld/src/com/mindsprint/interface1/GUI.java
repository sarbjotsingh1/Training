package com.mindsprint.interface1;

public class GUI {
    public static void main(String[] args) {
        StudentCRUD crud = new StudentCRUDImpl();
        Student student = new Student("Sarb","India");
        crud.addStudent(new Student("Singh","Canada"));
        crud.addStudent(student);
        crud.getAllStudens();
        crud.deleteStudent("Sarb1");
        crud.getAllStudens();
    }
}
