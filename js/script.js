
let now_playing = null;

$(document).ready(function(){

    $(".overlay").click(function(){
        if (now_playing != $(this).parent('.stream').attr('class')) {
            // play song
            now_playing = $(this).parent('.stream').attr('class');

            $('i').attr('class', 'far fa-play-circle');
            $(this).children('i').toggleClass('fa-play-circle fa-pause-circle');
        } else {
            // pause song
            $(this).children('i').toggleClass('fa-play-circle fa-pause-circle');

        }
    });
});
