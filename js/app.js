document.addEventListener("DOMContentLoaded", function() {
// var divs = $('.slide');
//
//   function fade() {
//       var current = $('.current');
//       var currentIndex = divs.index(current),
//           nextIndex = currentIndex + 1;
//
//       if (nextIndex >= divs.length) {
//           nextIndex = 0;
//       }
//
//       var next = divs.eq(nextIndex);
//
//       next.stop().fadeIn(2000, function() {
//           $(this).addClass('current');
//       });
//
//       current.stop().fadeOut(2000, function() {
//           $(this).removeClass('current');
//           setTimeout(fade, 2500);
//       });
//   }
//
//   fade();


var counter = 0;
var image = $(".slide");

image.css("background-image","url("+images[counter]+")");

setInterval(function(){
  counter++
image.fadeOut(200, function(){
  image.css("background-image","url("+images[counter]+")");
  image.fadeIn(800);
});
if(counter==images.length){
  counter = 0;
}
},4000)

});
