$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  function randomNum(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};

  $(window).scroll(function(){
    var num = $(window).scrollTop();
    $(".hero-img").css({
      "transform": "translateY(" + Math.max(- num/40, -200) + "px)",
      });
  });

// start nav
  var scrlls1img= 0;
  $(window).scroll(function(){
    var num = $(window).scrollTop();
      if(num>scrlls1img){
        $(".headerNav").addClass("fixed");
      }else{
        $(".headerNav").removeClass("fixed");
      }
  });
  var home1 = "Works"
  $( ".home" ).append(home1);
  var menuAbout = "About Me"
  $( "#menu-about" ).append(menuAbout);
  var about1 = "<p>Hi, I am Tom, a visual designer living in San Francisco, and have focused on experimenting mixture of graphic, animation, and programming, so my majority of graphic design work is screen-based media.<br/><br/>I make 2D/3D motion, and branding.<br/><br/></p>";
  var about2 = "<p><a href=\"https://mail.google.com/mail/?view=cm&fs=1&to=tomandlim@gmail.com\" target=\"_blank\" >tomandlim@gmail.com</a><br/><a href=\"https://www.instagram.com/tommlimm/\" target=\"_blank\" style='margin-top:1.5em'>instagram</a></p>";
  $( "#menu-about" ).click(function() {
    $('.about-section').toggleClass('about-open');
  });
  $( ".about" ).append(about1,about2);
});
