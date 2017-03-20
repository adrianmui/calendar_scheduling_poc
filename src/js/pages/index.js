$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy:3,
        mouseDrag: false,
        dotsContainer: '.owl-dots',

        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3,
            },
        }
    });
});
