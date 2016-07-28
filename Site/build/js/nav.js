// Mobile nav toggle

$(document).ready(function(){
  $('.icon-open ').on('click', function(){
    $('.main-nav').toggleClass('open');
     $(".icon-open , .icon-close").toggleClass('active');
  });
});

$(document).ready(function(){
  $('.icon-close ').on('click', function(){
    $('.main-nav').toggleClass('open');
     $(".icon-open , .icon-close").toggleClass('active');
  });
});

// Mobile nav closing on nav press

$(document).ready(function(){
  $('.link').on('click', function(){
    $('.main-nav').toggleClass('open');
    $(".icon-open, .icon-close").toggleClass('active');
  });
});

// Smooth scrolling

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Nav background on scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 100) {
        //console.log('a');
        $(".main-nav").addClass("scrolled");
    } else {
        //console.log('a');
        $(".main-nav").removeClass("scrolled");
    }
});
