// $(document).ready(function(){
//   var windowWidth = $(window).width();
// 	var windowHeight = $(window).height();
//
//   var stpt1 = 0;
//   var stpt2 = $('.container-tri').offset().top;
//
//   $(window).scroll(function(){
//     var num = $(window).scrollTop();
//
//     $(".titleWrapper").css({
//       "transform": "translateY(" + Math.max(- num/10, -100) + "px)",
//       });
//
//     $("#container").css({
//       "transform": "translateY(" + Math.min( num/10, 100) + "px)",
//       });
//
//     if(num > stpt1){
//       $(".nav-inv, #bg").addClass("txt-bg-inv");
//       $(".works-inv, .about-inv").addClass("txt-inv");
//       $(".logo-inv").addClass("mark-inv");
//     }else{
//       $(".nav-inv, #bg").removeClass("txt-bg-inv");
//       $(".works-inv, .about-inv").removeClass("txt-inv");
//       $(".logo-inv").removeClass("mark-inv");
//     };
//   });
// });
