$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  
  var stpt2 = $('.container-tri').offset().top;


  var $img = $('.grid-img-1')
  var tri_img_1 = $img.position().top + $img.outerHeight(true) - 80;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_1){
      $(".grid-img-1").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-2')
  var tri_img_2 = $img.position().top + $img.outerHeight(true) - 80;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_2){
      $(".grid-img-2").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-3')
  var tri_img_3 = $img.position().top + $img.outerHeight(true) - 80;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_3){
      $(".grid-img-3").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-4')
  var tri_img_4 = $img.position().top + $img.outerHeight(true) - 80;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_4){
      $(".grid-img-4").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-5')
  var tri_img_5 = $img.position().top + $img.outerHeight(true) - 80;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_5){
      $(".grid-img-5").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-6')
  var tri_img_6 = $img.position().top + $img.outerHeight(true) - 80;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_6){
      $(".grid-img-6").addClass("ani-mv");
    }
  });

  var $img = $('.grid-img-7')
  var tri_img_7 = $img.position().top + $img.outerHeight(true) - 80;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    if(num >= tri_img_7){
      $(".grid-img-7").addClass("ani-mv");
    }
  });



  $(window).scroll(function(){
    var stpt1 = 0;
    var num = $(window).scrollTop();
    $(".titleWrapper").css({
      "transform": "translateY(" + Math.max(- num/10, -100) + "px)",
      });
    $("#container").css({
      "transform": "translateY(" + Math.min( num/10, 100) + "px)",
      });

    if(num > stpt1){
      $(".nav-inv,#bg").addClass("txt-bg-inv");
      $(".works-inv, .about-inv").addClass("txt-inv");
      $(".logo-inv").addClass("mark-inv");
    }else{
      $(".nav-inv,#bg").removeClass("txt-bg-inv");
      $(".works-inv, .about-inv").removeClass("txt-inv");
      $(".logo-inv").removeClass("mark-inv");
    }

    if(num >= stpt2){
      $("#container").css({
        "display": "none",
        });
    }else{
      $("#container").css({
        "display": "block",
        });
    }
  });
});
