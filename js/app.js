document.addEventListener("DOMContentLoaded", function() {

  var counter = 0;
  var image = $("art-fader");

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
