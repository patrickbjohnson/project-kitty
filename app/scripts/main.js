'use strict';
/* global skrollr */
/* global Modernizr */
/* global FB */
/* global twttr */
$(document).ready(function(){
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
  }

  if (Modernizr.touch) {
    alert('For optimal exerpience, please visit this site from a desktop browser.');
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

      // Facebook Shares Count
      var $fURL = $('.fb-share-button').data('href');
          $.getJSON( 'http://graph.facebook.com/?id=' + $fURL, function( fbdata ) {
              $('.fb-counter').text((fbdata.shares));
          });

        var $bURL = $('link[rel="canonical"]').attr('href');
          // Twitter Shares Count
          $.getJSON( 'http://cdn.api.twitter.com/1/urls/count.json?url=' + $bURL + '&callback=?', function( twitdata ) {
              $('.tw-counter').text( (twitdata.count) );
          });

      // need google API to add the last counter
        
        $.getJSON( 'https://plusone.google.com/_/+1/fastbutton?url=http://www.research.ibm.com/articles/datacentricdesign/', function( gdata ) {
            console.log(gdata);
            var val = $('#aggregateCount').text();
            $('.gp-counter').text(val);
        });

        $('.share-trigger').on('click', function(e){
          e.preventDefault();
          $(this).next().toggleClass('open');
        });
});

  
  







  


