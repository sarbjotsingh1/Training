package com.mindsprint.restapi.repo;

import com.mindsprint.restapi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {
}
