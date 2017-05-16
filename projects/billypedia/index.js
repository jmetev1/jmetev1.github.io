/* global $ _ opspark */
$(document).ready(function() {
    $('div').css('color', 'blue');
    $('.quote').css('color', 'turquoise').css('font-style', 'italic');
    $('#quotes').css('padding-right', '100px').css('padding-left', '1px');
    $('#quotes:last-child').css('padding-bottom', '40px');
    
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        
         var bestAlbums=[];
         bestAlbums=topRated.map(function(album, index, topRated) {
            let one=album['title'];
            $("#list-top-rated").append(one)
            $("#list-top-rated").append('<li>')
            
        });

         //$section = $('<section>').attr('id', 'section-rider');

        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


