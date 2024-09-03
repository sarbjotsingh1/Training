package com.mindsprint.restapi.service;

import com.mindsprint.restapi.models.User;
import com.mindsprint.restapi.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo repo;

    @Override
    public User addUser(User user) {
        return repo.save(user);
    }

    @Override
    public List<User> getAll() {
        return repo.findAll();
    }

    @Override
    public User getUserById(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public User updateUserById(User user, int id) {
        User oldUser = getUserById(id);
        if(oldUser!=null){
            oldUser.setName(user.getName());
            oldUser.setCountry(user.getCountry());
            return repo.save(oldUser);
        }
        return null;
    }

    @Override
    public Boolean deleteById(int id) {
        if (getUserById(id) != null) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
