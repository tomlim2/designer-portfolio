$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  function randomNum(m,n) {
		//minumum number
		m = parseInt(m);

		//maximum number
		n = parseInt(n);

		// get a random number
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};

  var xPos = randomNum(1, windowWidth);


  var getRandomColor = function(){
    var color = ["#F48583","#D5E59F","#5ccae8","#f5b76a","#16c2b2","#e6e386","#ba85b3"];
    var randomColor = Math.floor(Math.random() * 7);
    return color[randomColor];
  };

  var getRandomColor2 = function(){
    var color = ["black","white","#083d5d","#842672","#f23d34","#efe9dd"];
    var randomColor = Math.floor(Math.random() * 6);
    return color[randomColor];
  };



  var scrlls1img= 0;

  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>scrlls1img){
        $(".headerNav").addClass("fixed");
      }else{
        $(".headerNav").removeClass("fixed");
      }
    });

    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".logoC").css({
            "opacity": 1 - Math.min(num/500, 0.55) ,
            "transform": "scale(" + (1 - Math.min(num/1000, 0.2)) + ")",
            });
      });

    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".parallax-hero").css({
            "transform": "translateY(" + Math.max(- num, -200) + "px)",
            });
      });


    $(window).scroll(function(){
      var num = $(window).scrollTop();
          $(".logospinning").css({
            "transform": "rotate("+ num + "deg)",
            });
      });

    $(".logospinning").click(function(){
      $("html, body").animate({
        scrollTop: $("#page").offset().top
      },1100);

      $(".logo-name").delay(200).animate({
        right: 8,
        opacity: 1
      },400);

      $(".hi--1").animate({
        right: -30,
        opacity: 0
      },200);

      $(".portfolio-section, .portfolio-item-info").css({
        "background-color": "white",
        "color": "black",
        // "font-size": "200%"
      });

      $("#about-section").css({
        "background-color": "rgba(80,170,200,1)",
        "color": "white",
        // "font-size": "200%"
      });

      $(".footer-section").css({
        "background-color": "black",
        // "font-size": "200%"
      });

      $(".logo1").css({
        "fill": "rgba(92,202,232,1)",
        // "font-size": "200%"
      });

    });


    $(".logospinning").mouseenter(function(){
      $(".logo-name").animate({
        right: -40,
        opacity: 0
      },400);

      $(".hi--1").delay(400).animate({
        right: -10,
        opacity: 1
      },200);
    });

    $(".hi--1").click(function(){
      $(".portfolio-item-info, .portfolio-section, #about-section, .footer-section").css({
        "background-color": getRandomColor,
        "color":getRandomColor2,
        // "font-size": "200%"
      });

      $(".logo1").css({
        "fill": getRandomColor,
        // "font-size": "200%"
      });



    });


    $("#bttn-project").click(function(){
      $("html, body").animate({
        scrollTop: $("#portfolio-section").offset().top
      },1100);
    });


    $(".footer-text").append(
      "E-mail: tomandlim@gmail.com <br> © Tom Lim 2018 — Development : Tom Lim"
    );


});
