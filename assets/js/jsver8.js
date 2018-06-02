$(document).ready(function(){


  var navtop= $(".pj-nav").offset().top;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>navtop){
        $(".pj-nav").addClass("fixed");
      }else{
        $(".pj-nav").removeClass("fixed");
      }
    });

  $(window).scroll(function(){
    var num = $(window).scrollTop();
        $(".hero-img").css({
          "transform": "translateY(" + Math.max(- num, -200) + "px)",
          });
    });
});
