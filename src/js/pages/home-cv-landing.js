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

$(window).scroll(navbarScroll);

$(function(){
    $('#Container').mixItUp();

    $('body').scrollspy({ target: '#navbar-lead', offset: 200 });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });
});

function navbarScroll() {
    var header = $('#home');
    var headerHeight = header.height();


    if($(window).scrollTop() > headerHeight) {
        $('.navbar').addClass('navbar-scroll animated fadeInDown shadow-2dp');
    }
    else {
        $('.navbar').removeClass('navbar-scroll animated fadeInDown shadow-2dp');
    }
}
