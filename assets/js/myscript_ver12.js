$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  function randomNum(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};


  var stpt1 = 0;
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

  var home1 = "Works"
  $( "#menu-works" ).append(home1);
  var menuAbout = "About"
  $( "#menu-about" ).append(menuAbout);
  var intro = "Hi, I am Tom, a visual designer living in San Francisco, and have focused on experimenting mixture of graphic, animation, and programming, so my majority of graphic design work is screen-based media. I make 2D/3D motion, and branding.<br/><br/>";
  var contact = "<p><a href=\"https://linkedin.com/in/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>linkedIn</a> | <a href=\"https://www.instagram.com/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>instagram</a><br/><a href=\"https://drive.google.com/open?id=1WF2Tcy2bwwxDNnPJxjD1qJRAmpsl1h4K\" download>resume</a> | <a href=\"https://mail.google.com/mail/?view=cm&fs=1&to=tomandlim@gmail.com\" target=\"_blank\" >tomandlim@gmail.com</a></p>";
  var info1 = "<p><span class=\"empha\">Training</span> <br/> BFA Graphic Design with high distinction - California College of the Arts, Spring 2019</p>";
  var info2 = "<p><span class=\"empha\">Awards</span> <br/> Student To Watch - Graphic Design USA, Spring 2019<br/><br/></p>";

  $( "#menu-about, #menu-about-n" ).click(function() {
    $('.about-section').toggleClass('about-open');
    $( "#menu-about" ).toggleClass("selected");
  });
  $( ".contact" ).append(intro,info1,info2,contact,);
});
