package com.mindsprint.restapi.controller;


import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    StudentService service;

    @PostMapping
    public ResponseEntity<Student> addProduct(@RequestBody Student student) {
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAll() {
        return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
    }

    @PostMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid, @PathVariable Long cid) {
        return new ResponseEntity<>(service.updateCourseById(sid,cid),HttpStatus.OK);
    }
}

