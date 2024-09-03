package com.mindsprint.encaptulation;

public class Book {
    private int id;
    private String tittle;
    private String author;

//    public Book(int id, String tittle, String author) {
//        this.id = id;
//        this.tittle = tittle;
//        this.author = author;
//    }

    //getter and setter
    public int getId() {
        return id;
    }

    public String getTittle() {
        return tittle;
    }

    public String getAuthor() {
        return author;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", tittle='" + tittle + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
