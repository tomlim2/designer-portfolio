$(document).ready(function(){

    $(".gotoif").click(function(){
      $("html, body").animate({
        scrollTop: $(".container1").offset().top
      },2000);
      $(".container2").fadeIn();
      $(".container1").fadeOut();
    });

    $(".slct01a").click(function(){
      $("html, body").animate({
        scrollTop: $(".ifscene5").offset().top
      },1000);

    });

    $(".slct01b").click(function(){
      $("html, body").animate({
        scrollTop: $(".ifscene2").offset().top
      },1000);
    });

    $(".slct02a").click(function(){
      $("html, body").animate({
        scrollTop: $(".ifscene7").offset().top
      },1000);

    });

    $(".slct02b").click(function(){
      $("html, body").animate({
        scrollTop: $(".ifscene9").offset().top
      },1000);
    });


});
