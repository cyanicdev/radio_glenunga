
let now_playing = null;

//now_playing.replace(/\stream/g, '').replace(/\-/g, ' ')

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

    $('.popup').bind('click', function() {
        $('.popup').css('visibility', 'hidden');
        $('.popup-content').css('visibility', 'hidden');
    });
});


$.ajax({ 
    type: 'GET', 
    url: window.location.protocol + '//' + window.location.hostname + ':8000/status-json.xsl', 
    data: { get_param: 'icestats' }, 
    dataType: 'json',
    success: function (data) { 
        console.log(data);
    }
});

let elements = document.getElementsByClassName("local-port");

for(let i = 0, element; element = elements[i++];) {
  if (element.tagName.toLowerCase() == 'audio')
  {
    let port = element.getAttribute('src').match(/^:(\d+)(.*)/);
    if (port)
    {
       element.src = window.location.protocol + "//" + window.location.hostname + ":" + port[1] + "/" + element.getAttribute('src').split('/')[1];
    }
  } else if (element.tagName.toLowerCase() == 'a') {
    let port = element.getAttribute('href').match(/^:(\d+)(.*)/);
    if (port)
    {
       element.href = window.location.protocol + "//" + window.location.hostname + ":" + port[1] + "/" + element.getAttribute('src').split('/')[1];
    }
  }
}
