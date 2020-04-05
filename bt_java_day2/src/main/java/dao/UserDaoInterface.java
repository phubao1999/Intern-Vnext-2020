package dao;

import java.util.List;

import model.User;

public interface UserDaoInterface {
    List<User> findAll();

}