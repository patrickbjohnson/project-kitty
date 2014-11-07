'use strict';
/* global skrollr */
/* global Modernizr */
/* global FB */
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

// set up the timer SVG animation
var txt = $('#timer-text');
var $th = $('#timer-holder'),
    th = $th.get(0);
  // skrollr init
	var s = skrollr.init({
		render: function(data){
       var num = Math.ceil(th.style['stroke-miterlimit']);
      	if( num < 25 ) {
          txt.text(num);
       }
		}

	});


  // social sharing
  // facebook. 
  $('.icon-fb').on('click', function(e){
    e.preventDefault();
    console.log('clicked');
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
          object:'http://pbj.me',
      })
    }, function(response){});

  });
});
