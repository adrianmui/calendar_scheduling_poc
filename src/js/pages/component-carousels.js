$(document).ready(function(){
    $('.owl1').owlCarousel();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        lazyLoad:true,
        autoplay: true,
        autoplayHoverPause: true,
        //nav:true,
        animateIn: 'fadeIn',
        slideBy:3,
        mouseDrag: false,
        dotsContainer: '.owl-dots',

        responsive:{
            0: {
                items: 1,
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
