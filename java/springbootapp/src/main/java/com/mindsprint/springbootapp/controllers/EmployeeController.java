package com.mindsprint.springbootapp.controllers;

import com.mindsprint.springbootapp.models.Employee;
import com.mindsprint.springbootapp.repo.EmployeeRepo;
import com.mindsprint.springbootapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
    EmployeeService service;

    @PostMapping
    public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee employee) {
        Employee createdObj = service.addEmployee(employee);
        return new ResponseEntity<>(createdObj, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
//        return new ResponseEntity<>(service.getAllEmployee(),HttpStatus.OK);
        return ResponseEntity.ok(service.getAllEmployee());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getByIf(@PathVariable int id) {
        Employee employee = service.getbyID(id);
        if (employee != null)
            return ResponseEntity.ok(employee);
        else
            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteByIf(@PathVariable int id) {
        if (service.deleteEmployee(id))
            return ResponseEntity.ok("Deleted");
        else
            return new ResponseEntity<>("Employee not found", HttpStatus.NOT_FOUND);
    }


}
