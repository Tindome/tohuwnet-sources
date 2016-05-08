//= require vendor/jquery.js
//= require vendor/lunr.js
//= require plugins.js

// Submit the search form automatically if at least 3 characters are entered
$('#search_box').on('input', function() {
    if ($(this).val().length > 2) {
        $(this).submit();
        $('#search-results').addClass('active');
    }
});

// Close the search results when the "close button" is clicked
$('#search-results .close-button').click(function() {
    $('#search-results').removeClass('active');
    $('#search_box').val('');
});
