package service.imlp;

import java.util.List;

import dao.UserDaoInterface;
import dao.impl.*;
import model.User;
import service.UserService;

public class UserImlp implements UserService {
    private UserDaoInterface userDao = new UserDaoImpl();
    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }

}