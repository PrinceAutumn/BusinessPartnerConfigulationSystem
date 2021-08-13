
$(function() {

  //添加第一个样式
  $("li:first").addClass("bg");

  //鼠标移动  adver
  $(".adver").mouseover(function() {
    $(".arrowLeft").show();
    $(".arrowRight").show();
  }).
  mouseout(function() {
    $(".arrowLeft").hide();
    $(".arrowRight").hide();
  });

  //图片数组
  var imgs = new Array("myPhotos01.jpg", "myPhotos02.jpg", "myPhotos03.jpg", "myPhotos04.jpg", "myPhotos05.jpg", "myPhotos06.jpg");

  //统计个数
  var count = 0;

  //单击右 边的>
  $(".arrowRight").click(function() {
    //判断
    if(count == imgs.length - 1) {
      count=0;
    } else {
      count++; //累计
    }
    $(".adver").css("background", "url(images/" + imgs[count] + ")"); //添加图片
    $('li:eq(' + count + ')').addClass("bg"); //添加圆圈背景
    $('li:eq(' + count + ')').siblings().removeClass("bg"); //删除前面的圆圈背景

  });

  //单击左边的>
  $(".arrowLeft").click(function() {
    //判断
    if(count == 0) {
      count=imgs.length - 1;
    } else {
      count--; //累计
    }
    $(".adver").css("background", "url(images/" + imgs[count] + ")"); //添加图片
    $('li:eq(' + count + ')').addClass("bg"); //添加圆圈背景
    $('li:eq(' + count + ')').siblings().removeClass("bg"); //删除前面的圆圈背景

  });
  图片自动滚动
  //开启定时器
  var timer = setInterval(function() {
    if(count == imgs.length - 1) {
      count=0; //回到起点0
    } else {
      count++; //累计
    }
    $(".adver").css("background", "url(images/" + imgs[count] + ")"); //添加图片
    $('li:eq(' + count + ')').addClass("bg"); //添加圆圈背景
    $('li:eq(' + count + ')').siblings().removeClass("bg"); //删除前面的圆圈背景
  }, 1000);


  //鼠标移入、移出
  $(".adver").hover(function() {
    clearInterval(timer);  //鼠标移入,定时器关闭
  }, function() {
    //鼠标移出,开启定时器
    timer = setInterval(function() {
      if(count == imgs.length - 1) {
        count=0; //回到起点0
      } else {
        count++; //累计
      }
      $(".adver").css("background", "url(images/" + imgs[count] + ")");  //添加图片
      $('li:eq(' + count + ')').addClass("bg");                          //添加圆圈背景
      $('li:eq(' + count + ')').siblings().removeClass("bg");            //删除前面的圆圈背景
    }, 1000);
  });

});
