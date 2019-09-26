$(document).ready(function(){
  var windowWidth = $(window).width();
	var windowHeight = $(window).height();

  function randomNum(m,n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor( Math.random() * (n - m + 1) ) + m;
	};

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
    $( ".contact" ).append(intro,info1,info2,contact);
});
