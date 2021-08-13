package com.ckcj.controller;
import com.ckcj.service.UserService;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/save")
    public String save() {
        User user = new User();
        userService.save(user);
        return "success";
    }

    @RequestMapping("/find/{id}")
    public User findById(@PathVariable("id") Long id){
        return userService.findById(Math.toIntExact(id));
    }

    @RequestMapping("/find")
    public List  find(){
        return userService.findAll();
    }

    @RequestMapping("/update")
    public String update(){
        User user  = new User();

        return "success";
    }

    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        userService.delete(id);
        return "删除成功";
    }
}

