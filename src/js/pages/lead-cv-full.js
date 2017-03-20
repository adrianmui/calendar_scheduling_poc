
window.onresize = introFull;
var handler = window.onresize;
handler.apply(window, [' On']);

$(document).ready(introFull);
$(window).resize(introFull);
$(window).scroll(navbarScroll);

function introFull() {
    var introNext = $('.intro-full-next');
    var introFull = $('.intro-full');
    var introFullHeight = introFull.height();

    var introFullContent = $('.intro-full-content');
    var introFullContentHeight = introFullContent.height();

    if($(window).width() < 768) {
        introNext.css('marginTop', '0px');
        $('#intro-video').addClass('hidden');
        introFullContent.addClass('intro-full-content-static');
    }
    else {
        //introNext.css('marginTop', introFullHeight + 'px');
        introFull.css('height', $(window).height() + 'px');


        if($(window).height() / $(window).width() > 0.5631970) {
            $('#intro-video').addClass('hidden');
        }
        else {
            $('#intro-video').removeClass('hidden');
        }
    }
}

function navbarScroll() {
    var introFull = $('.intro-full');
    var introFullHeight = introFull.height();


    if($(window).scrollTop() > introFullHeight) {
        $('.navbar').addClass('navbar-scroll');
    }
    else {
        $('.navbar').removeClass('navbar-scroll');
    }
}

$(function(){
    var content = $('#go-intro-full-next');
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

    $('#Container').mixItUp();
});

var myCircle1 = Circles.create({
    id:         'circles-1',
    radius:     60,
    value:      95,
    maxValue:   100,
    width:      5,
    text:       function(value){return value + '%';},
    colors:     ['rgba(255,255,255,0.3)', '#fff'],
    duration:   1000,
    wrpClass:   'circles-wrp',
    textClass:  'circles-text'
});

var myCircle2 = Circles.create({
    id:         'circles-2',
    radius:     60,
    value:      90,
    maxValue:   100,
    width:      5,
    text:       function(value){return value + '%';},
    colors:     ['rgba(255,255,255,0.3)', '#fff'],
    duration:   1000,
    wrpClass:   'circles-wrp',
    textClass:  'circles-text'
});

var myCircle3 = Circles.create({
    id:         'circles-3',
    radius:     60,
    value:      85,
    maxValue:   100,
    width:      5,
    text:       function(value){return value + '%';},
    colors:     ['rgba(255,255,255,0.3)', '#fff'],
    duration:   1000,
    wrpClass:   'circles-wrp',
    textClass:  'circles-text'
});
