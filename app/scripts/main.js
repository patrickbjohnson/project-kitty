'use strict';
/* global skrollr */
$(document).ready(function(){
	console.log('ready');
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


  // skrollr init
	var s = skrollr.init({
		render: function(data){
			$('.main-nav').text(data.curTop);

       var num = Math.ceil(document.getElementById('timer').style['stroke-miterlimit']);
      	if( num < 25 ) {
          document.getElementById('text').innerHTML = num;
       }
		}

	});
});
