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
  $('a.icon-up[href*=#]:not([href=#])').click(function() {
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


  // Facebook Shares Count
  var $fURL = 'http://pbj.me/IBM';
      $.getJSON( 'http://graph.facebook.com/?id=' + $fURL, function( fbdata ) {
          $('.fb-counter').text((fbdata.shares));
      });

    var $tURL = 'http://pbj.me/IBM';
      // Twitter Shares Count
      $.getJSON( 'http://cdn.api.twitter.com/1/urls/count.json?url=' + $tURL + '&callback=?', function( twitdata ) {
          $('.tw-counter').text( (twitdata.count) );
      });

  // need google API to add the last counter

});

