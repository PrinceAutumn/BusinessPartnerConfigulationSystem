<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2021/7/29
  Time: 15:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<html>
<head>
    <title>HTML5本地存储之Advertisment Placement篇</title>
</head>
<body>
<div style    = "border: 2px dashed #ccc;width:800px;text-align:center;">
    <%--@declare id="sitename"--%><label for    = "keyname">合作商 : </label>
    <input type   = "text" id="keyname" name="keyname" class="text"/>
    <label for    = "sitename">首页轮播：</label>
    <select class="form-control；width：180">
        <option>是/Yes</option>
        <option>否/No</option>
    </select>
    <label for    = "sitename">状态：</label>
    <select class="form-control；width：180">
        <option>是/Yes</option>
        <option>否/No</option>
    </select>
    <br/>
    <button type="button" class="btn btn-info btn-lg">搜索记录</button>
    <button type="button" class="btn btn-info btn-lg">新增记录</button>
    <hr/>
    <table class="table table-hover">
        <caption>广告配置表格布局</caption>
        <thead>
        <tr>
            <th>序号</th>
            <th>合作商</th>
            <th>广告标题</th>
            <th>是否首页轮播</th>
            <th>发布时间</th>
            <th>广告投放时间</th>
            <th>状态</th>
            <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>健力宝</td>
            <td>销售</td>
            <td>健力宝很好喝</td>
            <td>2021.1.1</td>
            <td>一年</td>
            <td>良好</td>
            <td> <button type="button" class="btn btn-info btn-lg">修改</button>
                <button type="button" class="btn btn-info btn-lg">禁用</button>
                <button type="button" class="btn btn-info btn-lg">启用</button>
                <button type="button" class="btn btn-info btn-lg">删除</button>
            </td>


            </td>

        </tr>
        <tr>
            <td>2</td>
            <td>王老吉</td>
            <td>服务</td>
            <td>怕上火喝王老吉</td>
            <td>2021.3.31</td>
            <td>三年</td>
            <td>良好</td>
        </tr>
        <tr>
            <td>3</td>
            <td>统一鲜橙多</td>
            <td>销售</td>
            <td>统一鲜橙多，越喝越美丽</td>
            <td>2021.6.31</td>
            <td>十年</td>
            <td>良好</td>
        </tr>
</body>
</html>
