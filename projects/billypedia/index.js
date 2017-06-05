/* global $ _ opspark */
$(document).ready(function() {
    $('div').css('color', 'blue');
    $('.quote').css('color', 'turquoise').css('font-style', 'italic');
    $('#quotes').css('padding-right', '100px').css('padding-left', '1px');
    $('#quotes:last-child').css('padding-bottom', '40px');
    
    $.getJSON('data.json', function (data) {
        var billyPics=['images/billy/billy-0.jpg', 'images/billy/billy-1.jpg', 'images/billy/billy-2.jpg', 'images/billy/billy-3.jpg'];
        
        const billyClicker=function(event) {
            for (let i=0; i<billyPics.length; i++) {
                if ($billy.children("img").attr("src")===billyPics[i]) {
                    if (i===3){
                        var next=billyPics[0]
                    }
                    else {var next= billyPics[i+1]
                    }
                    $billy.children("img").attr("src",next)
                    return
                } 
            }
        }
        const $billy=$('#image-container-billy' )
        $billy.on('click', billyClicker)

        let topRated = data.discography.topRated;
        var bestAlbums=[];
        bestAlbums=topRated.map(function(album, index, topRated) {
            let li= $('<li>')
                .text(album['title']+' by '+album['artist'])
                .appendTo($("#list-top-rated"))
                .addClass(album.art)
                .attr('art', album.art)
                li.on('click', function(event){
                    const trl= $('#list-top-rated')
                    trl.children('img').attr('src', album.art)
                })
        });
        $('#list-top-rated')
            .prepend('<img id= "before top rated" src="images/album/voice-in-the-night.jpg"/>')

        $('<section>')
            .attr('id','section-recordings')
            .appendTo($('#sidebar'))
            .text('Other Recordings')
        let moreRecordings = data.discography.recordings;
        
         var other=[];
         other=moreRecordings.map(function(album, index, moreRecordings) {
            let li= $('<li>')
                .attr('index', index)
                .text(album['title'])
                .appendTo($("#section-recordings"))
            li.on('click', function(event) {
                const sr= $('#section-recordings')
                sr.children('img').attr('src', album.art)
            })
        });
        $('#section-recordings')
            .prepend('<img id= "best fucking image" src="images/album/eastern-rebellion.jpg"/>')
    let $section = $('<section>')
        .attr('id', 'section-rider');
    $section.append($('<h3>')
        .text('Billy\'s Rider'))
        .appendTo($('#sections'));    
        
    var rider=data.rider
    var createTable=function(rider) {
        var createRow= function(instrument) {
            var $row=$('<tr>');
            var $type= $('<td>').text(instrument.type);
            var $desc= $('<td>').text(instrument.desc)
            $row.append($type);
            $row.append($desc);
            return $row;
        }
        var $table=$('<table>');
        var $rows=rider.map(createRow);
        $table.append($rows)
        return $table;
    }
    createTable(rider).appendTo($("#section-rider"))



        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});