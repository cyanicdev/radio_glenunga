
let now_playing = null;

$(document).ready(function(){

    $(".overlay").click(function(){
        if (now_playing != $(this).parent('.stream').attr('class')) {
            // play song
            now_playing = $(this).parent('.stream').attr('class');

            $('i').each(function(){
                if ($(this).attr('class') == 'far fa-pause-circle') {
                    $(this).attr('class', 'far fa-play-circle');
                }
            }); 

            $(this).children('i').toggleClass('fa-play-circle fa-pause-circle');

            $('audio').each(function(){
                this.pause(); // Stop playing
            }); 

            // bad code fix this
            document.getElementsByClassName(now_playing)[0].children[1].children[0].play();
        } else {
            // pause song
            $(this).children('i').toggleClass('fa-play-circle fa-pause-circle');

            document.getElementsByClassName(now_playing)[0].children[1].children[0].pause();
            now_playing = null;
        }
    });
});


$.ajax({ 
    type: 'GET', 
    url: 'http://10.60.101.11:8000/status-json.xsl', 
    data: { get_param: 'icestats' }, 
    dataType: 'json',
    success: function (data) { 
        console.log(data);
    }
});

$('.popup').bind('click', function() {
    $('.popup').css('visibility', 'hidden');
    $('.popup-content').css('visibility', 'hidden');
});
