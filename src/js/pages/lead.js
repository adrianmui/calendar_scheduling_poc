
window.onresize = introFull;
var handler = window.onresize;
handler.apply(window, [' On']);

$(document).ready(introFull);
$(window).resize(introFull);
$(window).scroll(navbarScroll);

function introFull() {
    var introNext = $('.intro-fixed-next');
    var introFixed = $('.intro-fixed');
    var introFixedHeight = introFixed.height();

    var introFixedContent = $('.intro-fixed-content');
    var introFixedContentHeight = introFixedContent.height();

    if($(window).width() < 768) {
        introNext.css('marginTop', '0px');
        introNext.addClass('intro-next-static');
        introFixed.addClass('intro-fixed-static');
    }
    else {
        introNext.css('marginTop', introFixedHeight + 'px');
        introNext.removeClass('intro-next-static');
        introFixed.removeClass('intro-fixed-static');
    }
}

function navbarScroll() {
    var introFixed = $('.intro-fixed');
    var introFixedHeight = introFixed.height();


    if($(window).scrollTop() > introFixedHeight) {
        $('.navbar').addClass('navbar-scroll');
    }
    else {
        $('.navbar').removeClass('navbar-scroll');
    }
}

$(function(){
    var content = $('#go-intro-fixed-next');
    var introNext = $('#intro-next');
    content.click(function() {
        $('html, body').stop().animate({
            scrollTop: introNext.offset().top
        }, 1000);
    });

    $('body').scrollspy({ target: '#navbar-lead', offset: 200 });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    setTimeout(function() { introFull(); }, 200);

});
