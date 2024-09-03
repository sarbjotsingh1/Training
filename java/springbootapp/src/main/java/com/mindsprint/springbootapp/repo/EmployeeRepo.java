package com.mindsprint.springbootapp.repo;

import com.mindsprint.springbootapp.models.Employee;

import java.util.List;

public interface EmployeeRepo {
    public Employee addEmployee(Employee employee);
    public List<Employee> getAllEmployee();
    public boolean deleteEmployee(int id);
    public Employee getbyID (int id);
}
