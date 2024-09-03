package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    Calculator c;

    @BeforeEach
    public void setUp() {
        System.out.println("Created");
        c = new Calculator();
    }

    @AfterEach
    public void tearDown() {
        System.out.println("Destroyed");
        c = null;
    }
    @Test
    public void subtestcase() {
        System.out.println("Sub Test Case executed");
        assertEquals(0, c.sub(5, 5));
    }


    @Test
    public void testcase() {
        System.out.println("Test Case executed");
        assertEquals(10, c.add(5, 5));
    }



}
