package com.ckcj.dao;

import org.springframework.beans.factory.annotation.Autowired;

public class LoginLogdao<JdbcTemplate, LoginLog> {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public void insertLoginLog(LoginLog loginLog) {
        String sqlStr = "INSERT INTO t_login_log(user_id,ip,login_datetime) "
                + "VALUES(?,?,?)";
        Object[] args = {loginLog.getClass(), loginLog.getClass(),
                loginLog.toString()};

    }
}

