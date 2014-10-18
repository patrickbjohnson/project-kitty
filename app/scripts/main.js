'use strict';
/* global skrollr */
$(document).ready(function(){
	console.log('ready');
	var s = skrollr.init({
		render: function(data){
			$('.main-nav').text(data.curTop);
		}, 
		
	});
});