package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 */
public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
//        Hello obj = (Hello) context.getBean("hello");
//        Hello obj1 = (Hello) context.getBean("hello");
//        obj.helloWorld();
//        System.out.println(obj == obj1);
        Student student = (Student) context.getBean("stu1");
        System.out.println(student);
//        Student student1 = (Student) context.getBean("stu2");
//        System.out.println(student1);
    }
}
