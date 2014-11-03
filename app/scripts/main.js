'use strict';
/* global skrollr */
/* global Modernizr */
$(document).ready(function(){

  // check SVG Support
  // If fails, then use the fallback PNG
  // All images will be in the same 'images' folder.
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
  }


  // smooth scrolling from links.
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

var txt = $('#timer-text');
var $th = $('#timer-holder'),
    th = $th.get(0);
  // skrollr init
	var s = skrollr.init({
    // forceHeight: false,
		render: function(data){
		//	$('.main-nav').text(data.curTop);

       var num = Math.ceil(th.style['stroke-miterlimit']);
      	if( num < 25 ) {
          txt.text(num);
       }
		}

	});
});
