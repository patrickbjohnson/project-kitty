'use strict';
/* global skrollr */
$(document).ready(function(){
	console.log('ready');

  var sliders = $('[data-anim="slide-in"]');
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
