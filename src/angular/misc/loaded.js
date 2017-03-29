'use strict';

import $ from 'jquery';

//temporary
$(document).ready(() => {
    // to fix load screen
    $('#ms-preload').hide('slow');

    // to remove gulp-built navigation
    $($('.col-md-3.ms-paper-menu-left-container').get(0)).remove();
});