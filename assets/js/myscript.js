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
  var $img1 = $('.grid-img-1')
  var tri_img_1 = $img1.position().top + $img1.outerHeight(true);
  var $img2 = $('.grid-img-2')
  var tri_img_2 = $img2.position().top + $img2.outerHeight(true);
  $(window).scroll(function(){
    var num = $(window).scrollTop();
    $(".titleWrapper").css({
      "transform": "translateY(" + Math.max(- num/10, -100) + "px)",
      });
    if(num>stpt1){
      $(".nav-inv").addClass("txt-bg-inv");
      $(".works-inv, .about-inv").addClass("txt-inv");
      $(".logo-inv").addClass("mark-inv");
    }else{
      $(".nav-inv").removeClass("txt-bg-inv");
      $(".works-inv, .about-inv").removeClass("txt-inv");
      $(".logo-inv").removeClass("mark-inv");
    }
    if(num>=stpt2){
      $("#container").css({
        "display": "none",
        });
    }else{
      $("#container").css({
        "display": "block",
        });
    }
    if(num>=tri_img_1){
      $(".grid-img-1").addClass("ani-mv");
    }else{
      // $(".grid-img-1").removeClass("ani-mv");
    }
    if(num>=tri_img_2){
      $(".grid-img-2").addClass("ani-mv");
    }else{
      // $(".grid-img-1").removeClass("ani-mv");
    }
  });

  var home1 = "Works"
  $( "#menu-works,.home" ).append(home1);
  var menuAbout = "About"
  $( "#menu-about,#menu-about-n" ).append(menuAbout);
  var intro = "<p>Hi, I am Tom, a visual designer living in San Francisco, and have focused on experimenting mixture of graphic, animation, and programming, so my majority of graphic design work is screen-based media. I make 2D/3D motion, and branding.<br/><br/>-</p>";
  var contact = "<p><a href=\"https://linkedin.com/in/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>LinkedIn</a> | <a href=\"https://www.instagram.com/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>Instagram</a><br/><a href=\"https://drive.google.com/open?id=1WF2Tcy2bwwxDNnPJxjD1qJRAmpsl1h4K\" download>Resume</a> | <a href=\"https://mail.google.com/mail/?view=cm&fs=1&to=tomandlim@gmail.com\" target=\"_blank\" >E-mail</a></p>";
  var info1 = "<p><h2 class=\"empha\">Training</h2> BFA Graphic Design with high distinction - California College of the Arts, Spring 2019</p>";
  var info2 = "<p><h2 class=\"empha\">Awards</h2> Student To Watch - Graphic Design USA, Spring 2019<br/><br/>-</p>";

  $( "#menu-about,#menu-about-n" ).click(function() {
    $('.about-section').toggleClass('about-open');
    $( "#menu-about" ).toggleClass("selected");
  });
  $( ".contact" ).append(intro,info1,info2,contact,);
});
