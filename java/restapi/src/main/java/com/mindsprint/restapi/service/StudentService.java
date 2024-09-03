package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.Course;
import com.mindsprint.restapi.models.Student;
import com.mindsprint.restapi.repo.CourseRepo;
import com.mindsprint.restapi.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service

public class StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private CourseRepo crepo;
    public Student addStudent(Student student){
        return repo.save(student);
    }
    public List<Student> getAllStudents(){
        return repo.findAll();
    }

    public Student updateCourseById(Long cid,Long sid){
        Student student = repo.findById(sid).orElse(null);
        if(student!=null){
            Course course = crepo.findById(cid).orElse(null);
            Set<Course> set = student.getCourses();
            set.add(course);
            student.setCourses(set);
            return repo.save(student);
        }
        return null;
    }
}
