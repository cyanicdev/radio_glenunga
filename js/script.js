let logged_in = false;
let now_playing = null;

//now_playing.replace(/\stream/g, '').replace(/\-/g, ' ')

var originalSrc;

$(document).ready(function(){
    $(".overlay").click(function(){
        if(logged_in) {
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
                    this.pause();
                }); 
    
                let player = document.getElementsByClassName(now_playing)[0].children[1].children[0];
                player.load()
                player.play()
            } else {
                // pause song
                $(this).children('i').toggleClass('fa-play-circle fa-pause-circle');
    
                document.getElementsByClassName(now_playing)[0].children[1].children[0].pause();
                now_playing = null;
            }
        }
    });

    $('.popup').bind('click', function() {
        $('.popup').css('visibility', 'hidden');
        $('.popup-content').css('visibility', 'hidden');
    });
});

$(document).ready ( function(){
    resize();
 });

$(window).resize(function() {
    resize();
});

function resize(){
    if ($(window).width() < 960) {
        // change title to image
        document.getElementById("titleImage").removeAttribute("hidden");
        document.getElementById("titleText").setAttribute("hidden","1");

        document.getElementById("discordImage").removeAttribute("hidden");
        document.getElementById("discordText").setAttribute("hidden","1");

        document.getElementById("infoImage").removeAttribute("hidden");
        document.getElementById("infoText").setAttribute("hidden","1");
        
        document.getElementById("musicImage").removeAttribute("hidden");
        document.getElementById("musicText").setAttribute("hidden","1");

        document.getElementById("feedbackImage").removeAttribute("hidden");
        document.getElementById("feedbackText").setAttribute("hidden","1");
     }
    else {
        // change image to title
        document.getElementById("titleText").removeAttribute("hidden");
        document.getElementById("titleImage").setAttribute("hidden","1");

        document.getElementById("discordText").removeAttribute("hidden");
        document.getElementById("discordImage").setAttribute("hidden","1");

        document.getElementById("infoText").removeAttribute("hidden");
        document.getElementById("infoImage").setAttribute("hidden","1");

        document.getElementById("musicText").removeAttribute("hidden");
        document.getElementById("musicImage").setAttribute("hidden","1");

        document.getElementById("feedbackText").removeAttribute("hidden");
        document.getElementById("feedbackImage").setAttribute("hidden","1");
    }
}

$.ajax({ 
    type: 'GET', 
    url: window.location.protocol + "//" + window.location.hostname + "/radio/pw",
    dataType: 'json',
    success: function (data) { 
        console.log(data)
        if (data.status === "ok"){
            document.getElementById("credsText").textContent = "Username: radio_gihs     Password: " + data.password;
            $(".overlay").each(function(){
                $(this).children('i').toggleClass('fa-times-circle fa-play-circle');
            });
            logged_in = true;
        } else {
            document.getElementById("credsText").textContent = "Sign in to Daily Access to access Radio Glenunga";
            document.getElementById("stations").style.opacity = 0.5;
        }
    },
    error: function (error){
        document.getElementById("credsText").textContent = "Sign in to Daily Access to access Radio Glenunga";
        document.getElementById("stations").style.opacity = 0.5;
    }
});

/*
$.ajax({ 
    type: 'GET', 
    url: "http://portal.gihs.sa.edu.au:8000/status-json.xsl", 
    data: { get_param: 'icestats' }, 
    dataType: 'json',
    success: function (data) { 
        console.log(data);
    }
});
*/

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
