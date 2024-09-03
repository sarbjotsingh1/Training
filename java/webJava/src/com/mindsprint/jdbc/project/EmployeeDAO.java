package com.mindsprint.jdbc.project;

import java.util.List;

public interface EmployeeDAO {
    public void addEmployee(Employee employee);
    public void getAllEmployee();
    public void deleteEmployee(int id);
    public void updateEmployeeName(int id,String name);


}
