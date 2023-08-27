//================================跳轉指定位置================================
$(function(){
  $(".about-click").click(function(){
    var position = $('#about').offset().top;
    $("html, body").animate({scrollTop:position}, 600);
    return false; //值不回傳給首頁
  })
});
$(function(){
  $("#top_about").click(function(){
    var position = $('#about').offset().top;
    $("html, body").animate({scrollTop:position}, 600);
    return false;
  })
});
$(function(){
  $("#top_portfolio").click(function(){
    var position = $('#portfolio').offset().top;
    $("html, body").animate({scrollTop:position}, 600);
    return false;
  })
});
$(function(){
  $("#top_other").click(function(){
    var position = $('#other').offset().top;
    $("html, body").animate({scrollTop:position}, 600);
    return false;
  })
});
//================================返回首頁================================
$(function(){
  $("#about").click(function(){
    $("html, body").animate({scrollTop:0}, 600);
    return false;
  })
});
$(function(){
  $("#portfolio").click(function(){
    $("html, body").animate({scrollTop:0}, 600);
    return false;
  })
});
$(function(){
  $("#other").click(function(){
    $("html, body").animate({scrollTop:0}, 600);
    return false;
  })
});
//================================輪播功能================================
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});
//================================tab切換================================
$(document).ready(function() {  
  $(".tab_content").hide(); //隱藏全部的tab內容
  $(".tab_content:first").show(); //顯示第一個tab內容  
  $("ul.tabs li").click(function() {  
      $(".tab_content").hide();
      var activeTab = $(this).find("a").attr("href"); //找到點選的<a>裡的href  
      $(activeTab).fadeIn(); //淡入，用於已隱藏元素顯示 
      return false;  //值不回傳給首頁
  }); 
}); 
//================================視窗彈跳================================
$(function(){
  //-------------------------------------
  $('.portfolio_img').mouseenter(function(){
      $(this).stop().animate({top:-10}, {duration:400, easing:'easeOutBounce'});
  });
  $('.portfolio_img').mouseleave(function(){
      $(this).stop().animate({top:0}, {duration:50});
  });
});
