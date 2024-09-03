package com.mindsprint.restapi.controller;

import com.mindsprint.restapi.models.Course;

import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {
    @Autowired
    CourseService service;

    @PostMapping
    public ResponseEntity<Course> addProduct(@RequestBody Course course) {
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAll() {
        return new ResponseEntity<>(service.getAllCourses(), HttpStatus.OK);
    }


}
