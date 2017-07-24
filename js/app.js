document.addEventListener("DOMContentLoaded", function() {

  var html;

  $('#menu').find("li:nth-child(1)").hover(function() {
    html = $(this).text();
    $(this).text("medium");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(html);
    $(this).css("text-align", "left");

  });

  var css;

  $('#menu').find("li:nth-child(2)").hover(function() {
    css = $(this).text();
    $(this).text("medium");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(css);
    $(this).css("text-align", "left");

  });

  var javascript;

  $('#menu').find("li:nth-child(3)").hover(function() {
    javascript = $(this).text();
    $(this).text("basic");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(javascript);
    $(this).css("text-align", "left");

  });

  var jqeury;

  $('#menu').find("li:nth-child(4)").hover(function() {
    jqeury = $(this).text();
    $(this).text("basic");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(jqeury);
    $(this).css("text-align", "left");

  });
  var sass;

  $('#menu').find("li:nth-child(5)").hover(function() {
    sass = $(this).text();
    $(this).text("medium");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(sass);
    $(this).css("text-align", "left");

  });
  var rwd;

  $('#menu').find("li:nth-child(6)").hover(function() {
    rwd = $(this).text();
    $(this).text("medium");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(rwd);
    $(this).css("text-align", "left");

  });
  var react;

  $('#menu').find("li:nth-child(7)").hover(function() {
    react = $(this).text();
    $(this).text("basic");
    $(this).css("text-align", "right");
  }, function() {
    $(this).text(react);
    $(this).css("text-align", "left");

  });
  // menu opuszczane

  var menu = $('.nav').find("#menu");
  var nav = $('.nav');
  var toggle = $('.nav').find("#toggle");

  toggle.on('click', function() {
    menu.slideToggle(function() {
      menu.css("visibility", "visible");
    });

  });

  // animacja x

  toggle.on('mouseover', function() {
    toggle.find(".bar1").addClass("change_bar1");
    toggle.find(".bar2").addClass("change_bar2");
    toggle.find(".bar3").addClass("change_bar3");
  })

  toggle.on('mouseout', function() {
    toggle.find(".bar1").removeClass("change_bar1");
    toggle.find(".bar2").removeClass("change_bar2");
    toggle.find(".bar3").removeClass("change_bar3");
  });

  // $("header").click(function() {
  //     $(this).fadeOut(1000, function() {
  //         $(this).css("background-color", "#800080").fadeIn(1000);
  //     });
  // });


// var header = $('header');
// console.log(header);
//
// header.on('mouseover', function() {
//   $('body').css("background-color", "#800080");
//
// })
//
// header.on('mouseout', function() {
//   $('body').css("background-color", "black");
//
// });


});
