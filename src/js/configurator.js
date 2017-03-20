$(document).ready(function() {
    setActiveMenu();
    ColorOptions();
    headerOptions();
    widthOptions();
});

function widthOptions() {
    $('#ms-boxed').prop('disabled', true);

    if ($.cookie("ms-width")) {
        var newWidth = $.cookie("ms-width");
        setWidth(newWidth);
         $('#' + newWidth + 'Width').prop('checked', true);
    }

    $('#boxed-config input').on('change', function() {
        optionWidth = $('input[name=customWidth]:checked', '#boxed-config').val();
        setWidth(optionWidth);
    });

    function setWidth(optionWidth) {
        if (optionWidth === 'boxed')
            $('#ms-boxed').prop('disabled', false);
        else
            $('#ms-boxed').prop('disabled', true);

        $.cookie("ms-width", optionWidth, {expires: 7, path: '/'});
    }
}

function headerOptions() {
    var headerColor = 'primary';
    var navbarColor = 'primary';
    var newHeaderColor = headerColor;
    var newNavbarColor = navbarColor;

    var headerElement = $('.ms-header');
    var navbarElement = $('.ms-navbar');

    function setHeaderTheme(oldColor, newHeaderColor) {
        navbarElement.removeClass('navbar-mode');

        if (oldColor == 'hidden') {
            headerElement.removeClass('hidden');
        }
        else {
            headerElement.removeClass('ms-header-' + oldColor);
        }

        if (newHeaderColor == 'hidden') {
            headerElement.addClass('hidden');
            $('#noHeader').prop('checked', true);
            navbarElement.addClass('navbar-mode');
        }
        else {
            headerElement.addClass('ms-header-' + newHeaderColor);
            $('#' + newHeaderColor + 'Header').prop('checked', true);
        }

        headerColor = newHeaderColor;
        $.cookie("ms-header-color", headerColor, {expires: 7, path: '/'});

    }

    function setNavbarTheme(oldColor, newColor) {
        navbarElement.removeClass('ms-navbar-' + oldColor);
        navbarElement.addClass('ms-navbar-' + newColor);

        navbarColor = newColor;
        $('#' + navbarColor + 'Navbar').prop('checked', true);
        $.cookie("ms-navbar-color", navbarColor, {expires: 7, path: '/'});
    }

    if ($.cookie("ms-header-color")) {
        newHeaderColor = $.cookie("ms-header-color");
    }

    if ($.cookie("ms-navbar-color")) {
        newNavbarColor = $.cookie("ms-navbar-color");
    }

    setHeaderTheme(headerColor, newHeaderColor);
    setNavbarTheme(navbarColor, newNavbarColor);

     // Cambiamos la opción marcada
     //$('#' + headerColor + 'Header').prop('checked', true);

    //$('input[name=customHeader]:checked', '#header-config').prop('checked', 'false');
    //$('#primaryHeader').prop('checked', true);
    //console.log($('input[name=customHeader]:checked', '#header-config').val());

    $('#header-config input').on('change', function() {
        optionColor = $('input[name=customHeader]:checked', '#header-config').val();
        setHeaderTheme(headerColor, optionColor);
    });

    $('#navbar-config input').on('change', function() {
        optionColor = $('input[name=customNavbar]:checked', '#navbar-config').val();
        setNavbarTheme(navbarColor, optionColor);
    });

    //setHeaderTheme('dark', 'dark');
}

function ColorOptions() {
    var urlBase = urlofdoc('app.min.js');
    var urlCss = urlBase + "css/";

    var colorLink = $("link[href^= '" + urlCss + "style']");
    var currentColor = $("#color-options .ms-color-box-primary.active");
    var currentShine = $("#grad-options .grad.active");
    var color = 'light-blue';
    var shine = 500;

    function setTheme(color, shine) {
        colorLink.attr("href", urlCss + 'style.' + color + '-' + shine + '.min.css');
        currentColor.removeClass('active');
        currentShine.removeClass('active');
        currentColor = $("#color-options .ms-color-box-primary." + color);
        currentShine = $("#grad-options .grad.c" + shine);
        currentColor.addClass("active");
        currentShine.addClass("active");
        $.cookie("ms-color", color, {expires: 7, path: '/'});
        $.cookie("ms-shine", shine, {expires: 7, path: '/'});
    }

    // Comprobamos si ya hay cookies establecidas
    if($.cookie("ms-color")) {
        $('.grad').removeClass(color);
        color = $.cookie("ms-color");

        if ($.cookie("ms-shine")) {
            shine = $.cookie("ms-shine");
        }

        setTheme(color, shine);
        $('.grad').addClass(color);
    }

    // Comprobamos si hay cambios en los controles
    $("#color-options .ms-color-box-primary").click(function() {
        $('.grad').removeClass(color);
        color = $(this).data('color');
        $('.grad').addClass(color);

        setTheme(color, 500);

        return false;
    });

    $("#grad-options .grad").click(function() {
        shine = $(this).data("shine");
        setTheme(color, shine);
        return false;
    });
}

function urlofdoc (jsfile) {
    var myfile, myurl;
    var scriptElement = $("script[src*='app.min.js']");

    myfile = scriptElement.attr("src");

    if(myfile.indexOf( jsfile ) >= 0) {
        myurl = myfile.substring( 0, myfile.indexOf( jsfile )-3);
    }

    return myurl;
}

function setActiveMenu() {
    var file = window.location.pathname;
    var fileName = file.lastIndexOf("/")+1;
    var fileType = file.slice(fileName, file.indexOf('-', fileName));

    if(fileType === '' || fileType === 'index.htm') {
        fileType = 'home';
    }

    var menuElements = $('*[data-name]');

    $.each(menuElements, function(index, value) {
        $(value).parent().removeClass('active');
    });

    $('*[data-name="' + fileType + '"]').parent().addClass('active');

}
