package com.mindsprint.task;

public class StudentGrades {
    String name;
    int[] grades;

    public StudentGrades(String name, int[] grades) {
        this.name = name;
        this.grades = grades;
    }
    public double calculateAverage(){
        double sum = 0;
        for(int grade : grades){
            sum += grade;
        }
        return sum/(grades.length);
    }
     public  void displayInfo(){
         System.out.println(name);
         System.out.println(calculateAverage());
     }


    public static void main(String[] args) {
        StudentGrades s1 = new StudentGrades("Sarb", new int[]{90, 80, 99, 98});
        s1.displayInfo();
    }
}
