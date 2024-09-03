package com.mindsprint.restapi.controller;

import com.mindsprint.restapi.models.Product;
import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    ProductService service;

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        return new ResponseEntity<>(service.addProduct(product), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAll(){
        return new ResponseEntity<>(service.getAllProducts(),HttpStatus.OK);
    }

}
