package com.ckcj.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ServletRequest extends HttpServlet {
    private String message;

    public void init() throws ServletException {
        message = "Welcome to our News!!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

// 设置响应内容类型
        response.setContentType("text/html");

// 实际的逻辑是在这里
        PrintWriter out = null;
        try {
            out = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        out.println("<h1>" + message + "</h1>");
    }
}

