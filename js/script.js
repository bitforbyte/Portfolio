var navOffset;

$(window).on("load", function(){
    $(".loader .inner").fadeOut(800, function(){
        $(".loader").fadeOut(900);
    });

    navOffset = jQuery("#navbar").offset().top;
})

$(document).ready(function() {
    
    //jQuery("#navbar").wrap('<div class="nav-placeholder"></div>')
    //jQuery(".nav-placeholder").height(jQuery("#navBar").outerHeight());

    jQuery(window).scroll(function(){
        
        var scrollPos = jQuery(window).scrollTop();

        this.console.log(navOffset)
        
        if (scrollPos >= navOffset) {
            jQuery("#navbar").addClass("fixed");
        } else {
            jQuery("#navbar").removeClass("fixed");
        }
        
    });

    
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

/*
// When the window is scrolled
window.onscroll = function() {moveNavBar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset positions of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove when leacing the scroll position
function moveNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}*/

