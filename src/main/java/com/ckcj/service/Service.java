package com.ckcj.service;

import sun.plugin2.message.Message;

import java.awt.*;
import java.util.ArrayList;

/**
 *
 * @author Admin
 * 列表相关的业务功能
 */
public class Service<MessageDao> {
    /**
     * service是与servlet对应的
     */

    public List<MessageDao> queryMessageList(String command, String description){
        MessageDao messageDao = new MessageDao();

        List list = new List();

        list = messageDao.getClass(command, description);

        return list;
    }
}
