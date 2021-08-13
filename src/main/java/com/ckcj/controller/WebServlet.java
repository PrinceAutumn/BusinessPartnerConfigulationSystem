package com.ckcj.controller;

import jdk.nashorn.internal.objects.NativeError;
import sun.security.pkcs11.wrapper.Constants;

import javax.jws.WebService;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/WebServlet")
public class WebServlet<Student> extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取客户端提交的数据
        String stuNo = req.getParameter("stuNo");
        String stuPwd = req.getParameter("stuPwd");

        try {
            Student stu = WebService.isLogin(stuNo, stuPwd);
            if (stu != null) {    //有该用户，存进session，跳转到查看导师页面
                HttpSession session = req.getSession();
                resp.sendRedirect("stu_check_tutor.jsp");
            } else {    //无该用户，跳转至登录页面，并提示错误信息
                req.setAttribute("error", "用户名或密码不正确");
                req.getRequestDispatcher("login.jsp").forward(req, resp);
                System.out.println("结束Servlet....");
            }
      
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    }




