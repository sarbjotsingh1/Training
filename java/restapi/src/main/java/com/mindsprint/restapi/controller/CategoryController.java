package com.mindsprint.restapi.controller;

import com.mindsprint.restapi.models.Category;
import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.service.CategoryService;
import com.mindsprint.restapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    CategoryService service;

    @PostMapping
    public ResponseEntity<Category> addProduct(@RequestBody Category category){
        return new ResponseEntity<>(service.addCategory(category), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAll(){
        return new ResponseEntity<>(service.getAllCategories(),HttpStatus.OK);
    }
}
