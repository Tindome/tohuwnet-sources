//= require vendor/jquery.js
//= require vendor/lunr.js
//= require vendor/search.js
//= require vendor/fontawesome.js
//= require vendor/littlefoot.js
//= require vendor/twitter.js

// Avoid 'console' errors in browsers that lack a console.
(function(event) {
    var method;
    var noop = function (event) {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Submit the search form automatically if at least 3 characters are entered
$('.search_box').on('input', function(event) {
    if ($(this).val().length > 2) {
        $(this).submit();
        $('.search-results').addClass('active');
    }
});

// Close the search results when the "close button" is clicked
$('.search-results .close-button').click(function(event) {
    $('.search-results').removeClass('active');
    $('.search_box').val('');
});

$(document).ready(function(event){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});
