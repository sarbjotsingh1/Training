package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class BatchUpdate {
    public static void main(String[] args) {
        try (Connection conn = DBConfig.getConnection();) {
            Scanner sc = new Scanner(System.in);
            String sql = "insert into employee (name,email)values(?,?)";
            PreparedStatement pst = conn.prepareStatement(sql);
            while (true) {
                System.out.println("Enter Name :");
                String name = sc.nextLine();
                System.out.println("Enter Email : ");
                String email = sc.nextLine();
                pst.setString(1, name);
                pst.setString(2, email);
                pst.addBatch();
                System.out.println("Press 1 to exit : ");
                if (sc.nextLine().equals("1"))
                    break;
            }
            int[] record = pst.executeBatch();
            System.out.println(record.length + " records added");

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
