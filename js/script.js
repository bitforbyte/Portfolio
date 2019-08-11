var navOffset;
var scrollPos;
var navSelected;

$(window).on("load", function(){
    //$('nav').hide();
    $(".loader .inner").fadeOut(800, function(){
        $(".loader").fadeOut(900);
        
    });

    navOffset = $(window).height();
    //navSelected = 
    //$('nav').show();
})

$(document).ready(function() {

    //$("#test a").addClass("load");
    
    jQuery("#navbar").wrap('<div class="nav-placeholder"></div>')
    jQuery(".nav-placeholder").height(jQuery("#navBar").outerHeight());

    // Get the navOffset when page is reset
    $(window).resize(function() {
        //this.console.log("Height:" +$(window).height());

        navOffset = $(window).height();

        //scrollPos = jQuery(window).scrollTop();
    })

    // Assign the sticky property to the navbar
    jQuery(window).scroll(function(){        
        scrollPos = jQuery(window).scrollTop();

        if (scrollPos >= navOffset) {
            jQuery("#navbar").addClass("fixed");
        } else {
            jQuery("#navbar").removeClass("fixed");
        }
        
    });

    // Smooth scroll to section
    $(".nav a").on("click", function() {

        if (this.hash != ""){
            event.preventDefault();

            // store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Add the hash to the url when done scrolling
                window.location.hash = hash;
                $(".nav").find(".active").removeClass("active");
                $(this).parent().addClass("active");
            })
        }
        
    }) 
        
    
    $('#slides').superslides({
        animation: 'fade',
        play: 9000,
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