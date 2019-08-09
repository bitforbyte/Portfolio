$(window).on("load", function(){
    $(".loader .inner").fadeOut(800, function(){
        $(".loader").fadeOut(900);
    });
})

$(document).ready(function() {

    
    $('#slides').superslides({
        animation: 'fade',
        play: 8000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Full Stack Engineer"],
        typeSpeed: 80,
        loop: false,
        startDelay: 1000,
        showCursor: false
    });


});

