var navOffset;
var scrollPos;
var navSelected;

$(window).on("load", function(){
    //$('nav').hide();
    $(".loader .inner").fadeOut(800, function(){
        $(".loader").fadeOut(900);
        
    });

    navOffset = $(window).height();

    // Set the bar incase its loaded halfway on the page
    if (jQuery(window).scrollTop() >= navOffset) {
        jQuery("#navbar").addClass("fixed");
    } else {
        jQuery("#navbar").removeClass("fixed");
    }
})

$(document).ready(function() {
    
    jQuery("#navbar").wrap('<div class="nav-placeholder"></div>')
    jQuery(".nav-placeholder").height(jQuery("#navBar").outerHeight());

    $('.projectHR').css({
        'width': ($('.container').width() + 'px')
    });
    //console.log($('.container').width() )
    // Get the navOffset when page is reset
    $(window).resize(function() {
        navOffset = $(window).height();
        $('.projectHR').css({
            'width': ($('.container').width() + 'px')
        });
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
    $(".nav a").on("click", function(eve) {

        if (this.hash != ""){
            eve.preventDefault();

            // store hash
            var hash = this.hash;
            var offset = $(".navbar-header").height();

            // Close the navbar when small
            $(".navbar-collapse").collapse('hide');

            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 1200, function() {})
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