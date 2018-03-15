$(document).ready(function(){


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

    $(".logobox").click(function(){
      $("html, body").animate({
        scrollTop: $("#page").offset().top
      },1100);
    })
    $("#bttn-project").click(function(){
      $("html, body").animate({
        scrollTop: $("#portfolio-section").offset().top
      },1100);
    })


    var getRandomColor = function(){
      var color2 = ["#F48583","#D5E59F","#5ccae8"];
      var randomColor = Math.floor(Math.random() * 3);
      return color2[randomColor];
    };




    $(".footer-text").append("© Tom Lim 2018 — DEVELOPMENT : Tom lim");


});


// Slideshow
var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("img-slides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}


// End Slideshow
//
// var sliderObjects = [];
// createSliderObjects();
//
// function plusDivs(obj, n) {
//   var parentDiv = $(obj).parent();
//   var matchedDiv;
//   $.each(sliderObjects, function(i, item) {
//     if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
//       matchedDiv = item;
//       return false;
//     }
//   });
//   matchedDiv.slideIndex=matchedDiv.slideIndex+n;
//   showDivs(matchedDiv, matchedDiv.slideIndex);
// }
//
// function createSliderObjects() {
//   var sliderDivs = $('.slideshows');
//   $.each(sliderDivs, function(i, item) {
//     var obj = {};
//     obj.id = $(item).attr('id');
//     obj.divContent = item;
//     obj.slideIndex = 1;
//     obj.slideContents = $(item).find('.img-slides');
//     showDivs(obj, 1);
//     sliderObjects.push(obj);
//   });
// }
//
// function showDivs(divObject, n) {
//   debugger;
//   var i;
//   if (n > divObject.slideContents.length) {
//     divObject.slideIndex = 1
//   }
//   if (n < 1) {
//     divObject.slideIndex = divObject.slideContents.length
//   }
//   for (i = 0; i < divObject.slideContents.length; i++) {
//     divObject.slideContents[i].style.display = "none";
//   }
//   divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
// }
