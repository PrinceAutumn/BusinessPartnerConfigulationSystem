package com.ckcj.dao;
import sun.rmi.transport.Connection;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public interface UserDao<User> {
    //1.初始化数据
    void doInitUser(User user);
    //2.通过id新增用户
    boolean doAddUser     (int uid);
    //3.通过id删除用户
    boolean doDelUser     (int uid);
    //4.通过id修改用户
    boolean doModUser     (int uid);
    //5.通过id查询用户
    boolean doFindById    (int uid);
    //6.回显所有的信息
    void doPringAllInformation (int uid);

    public default boolean SearchUser(String u, String p) throws SQLException {
        PreparedStatement preparedStatement = null;
        ResultSet rs = null;
        Connection con = null;
        //启动mysql驱动器
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String sql = "select * from usert where username=? and password=?";
            preparedStatement = ((java.sql.Connection) con).prepareStatement(sql);
            preparedStatement.setString(1, u);
            preparedStatement.setString(2, p);
            rs = preparedStatement.executeQuery();
            if (rs.next()) {
                return true;
            } else {
                return false;
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (preparedStatement != null) {
                preparedStatement.close();
            }
            if (con != null) {
                try {
                    con.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return false;
    }
}
