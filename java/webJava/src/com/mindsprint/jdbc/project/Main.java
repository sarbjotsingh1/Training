package com.mindsprint.jdbc.project;

public class Main {
    public static void main(String[] args) {
        EmployeeDAO dao = new EmployeeDAOImpl();
//        Employee employee = new Employee("Sarb","Sarb@gmail.com");
//        dao.deleteEmployee(2);
        dao.updateEmployeeName(1,"sarbjot");
        dao.getAllEmployee();

    }
}
