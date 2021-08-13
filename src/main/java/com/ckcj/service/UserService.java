package com.ckcj.service;

import org.apache.tomcat.jni.User;

import java.awt.*;
/**
 * @author admin
 */
@SuppressWarnings("all")
public abstract class UserService {
  abstract List getAllUser();

  abstract User getUserByPhoneOrEmail(String emailOrPhone, Short state);

  abstract User getUserById(Long userId);

    public abstract void save(User user);

  public abstract void deleteById(Integer id);

  public abstract void update(User user);

  public abstract User findById(Integer id);

  public abstract List findAll();

  public abstract void loginSuccess(User user);

  public abstract void delete(Long id);
}

