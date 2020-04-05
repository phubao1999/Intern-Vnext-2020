package dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import dao.UserDaoInterface;
import model.User;
import utils.ConnectDB;

public class UserDaoImpl implements UserDaoInterface {
    private Connection myConnect;
    private Statement statement;
    private ResultSet rs;

    @Override
    public List<User> findAll() {
        List<User> userList = new ArrayList<User>();
        myConnect = ConnectDB.getConnection();
        String query = "SELECT * FROM user";
        try {
            statement = myConnect.createStatement();
            rs = statement.executeQuery(query);
            while (rs.next()) {
                User user = new User(
                    rs.getInt("id"), 
                    rs.getString("Name"), 
                    rs.getInt("Age"), 
                    rs.getString("Position"), 
                    rs.getString("Address"));
                userList.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return userList;
    }

}