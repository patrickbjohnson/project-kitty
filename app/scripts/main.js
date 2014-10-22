'use strict';
/* global skrollr */
$(document).ready(function(){
	console.log('ready');

  var sliders = $('[data-anim="slide-in"]');
	var s = skrollr.init({
		render: function(data){
			$('.main-nav').text(data.curTop);
		}, 
		
	});
});