package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EmployeeDAOImpl implements EmployeeDAO {

    @Override
    public void addEmployee(Employee employee) {
        try (Connection connection = DBConfig.getConnection()) {
            String sql = "insert into employee (name,email) values(?,?);";
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setString(1, employee.getName());
            pst.setString(2, employee.getEmail());
            int result = pst.executeUpdate();
            if(result>0)
                System.out.println("Employee added successfully");
            else
                System.out.println("Error while addEmployee");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void getAllEmployee() {
        try (Connection connection = DBConfig.getConnection()) {
            String sql = "select * from employee;";
            Statement stmt = connection.createStatement();
            ResultSet set = stmt.executeQuery(sql);
            while(set.next()){
                System.out.println(set.getInt(1)+ " "+set.getString(2)+ " "+ set.getString(3));
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public void deleteEmployee(int id) {
        try (Connection connection = DBConfig.getConnection()) {
            String sql = "delete from employee where id=(?);";
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setInt(1, id);
            if(pst.executeUpdate()>0)
                System.out.println("User Deleted");
            else
                System.out.println("User not found");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public void updateEmployeeName(int id, String name) {
        try (Connection connection = DBConfig.getConnection()) {
            String sql = "update employee set name=(?) where id=(?)";
            PreparedStatement pst = connection.prepareStatement(sql);
            pst.setString(1, name);
            pst.setInt(2, id);
            int result = pst.executeUpdate();
            if(result>0)
                System.out.println("Employee updated successfully");
            else
                System.out.println("Error while addEmployee");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
}
