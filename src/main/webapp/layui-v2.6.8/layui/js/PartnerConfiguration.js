<div style="border: 2px dashed #ccc;width:800px;text-align:center;">
  <%--@declare id="siteurl"--%>
  <label for = "keyname">
</label>
<input type="text" id="keyname" name="keyname" className="text"/>
<label htmlFor="sitename"> 合作商地区：</label>
<input type="text" id="sitename" name="sitename" className="text"/>
<br/>
<label htmlFor="siteurl">  合作商类型： </label>
<select className="form-control；width：180">
  <option>餐饮服务</option>
  <option>医疗服务</option>
  <option>社区服务</option>
  <option>公交服务</option>
  <option>售后服务</option>
</select>
<br/>
<button type="button" className="btn btn-info btn-lg">搜索记录</button>
<button type="button" className="btn btn-info btn-lg">新增记录</button>

<hr/>
<table className="table table-hover">
  <caption>合作商配置表格布局</caption>
  <thead>
  <tr>
    <th>序号</th>
    <th>合作商名称</th>
    <th>合作商类型</th>
    <th>合作商坐标</th>
    <th>合作商地区</th>
    <th>操作</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>1</td>
    <td>传一干饭人</td>
    <td> 服务</td>
    <td>222，333</td>
    <td>福州</td>
    <td>
      <button type="button" className="btn btn-info btn-lg">修改</button>
      <button type="button" className="btn btn-info btn-lg">禁用</button>
      <button type="button" className="btn btn-info btn-lg">启用</button>
      <button type="button" className="btn btn-info btn-lg">删除</button>
    </td>

  </tr>
  <tr>
    <td>2</td>
    <td>卓越牌医疗</td>
    <td>服务</td>
    <td>400，003</td>
    <td>漳州</td>

  </tr>
  <tr>
    <td>3</td>
    <td>飞跃社区</td>
    <td>服务</td>
    <td>300，001</td>
    <td>福州</td>

  </tr>
  <tr>
    <td>4</td>
    <td>传一导航定位坐标</td>
    <td>交通</td>
    <td>500，003</td>
    <td>福州</td>

  </tr>
  <tr>
    <td>5</td>
    <td>龙马售后商</td>
    <td>服务</td>
    <td>200，004</td>
    <td>厦门</td>

  </tr>

