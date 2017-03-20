module.exports = function (processor) {
    var ComponentsMenu = [
        {
            name: '<i class="fa fa-bold"></i> Bootstrap CSS',
            children : [
                {
                    name: '<i class="fa fa-font"></i> Typography',
                    link: 'component-typography.html'
                },
                {
                    name: '<i class="fa fa-header"></i> Headers',
                    link: 'component-headers.html'
                },
                {
                    name: '<i class="fa fa-arrows-h"></i> Dividers',
                    link: 'component-dividers.html'
                },
                {
                    name: '<i class="fa fa-quote-right"></i> Blockquotes',
                    link: 'component-blockquotes.html'
                },
                {
                    name: '<i class="fa fa-check-square-o"></i> Forms',
                    link: 'component-forms.html'
                },
                {
                    name: '<i class="fa fa-table"></i> Tables',
                    link: 'component-tables.html'
                },
            ]
        },
        {
            name: '<i class="fa fa-hand-o-up"></i> Buttons',
            children : [
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Basic Buttons',
                    link: 'component-basic-buttons.html'
                },
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Buttons Components',
                    link: 'component-buttons-components.html'
                },
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Social Buttons',
                    link: 'component-social-buttons.html'
                },
            ]
        },
        {
            name: '<i class="fa fa-briefcase"></i> Icons',
            children : [
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Basic Icons',
                    link: 'component-icons-basic.html'
                },
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Font Awesome',
                    link: 'component-icons-fontawesome.html'
                },
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Material Design Iconic',
                    link: 'component-icons-iconic.html'
                },
                {
                    name: '<i class="fa fa-arrow-circle-right"></i> Glyphicons',
                    link: 'component-icons-glyphicons.html'
                },
            ]
        },
        {
            name: '<i class="fa fa-list-alt"></i> Basic Components',
            children : [
                {
                    name: '<i class="zmdi zmdi-view-agenda"></i> Panels',
                    link: 'component-panels.html'
                },
                {
                    name: '<i class="zmdi zmdi-info"></i> Alerts &amp; Wells',
                    link: 'component-alerts.html'
                },
                {
                    name: '<i class="zmdi zmdi-tag"></i> Labels &amp; Badges',
                    link: 'component-labels.html'
                },
                {
                    name: '<i class="zmdi zmdi-view-list"></i> Lists',
                    link: 'component-lists.html'
                },
                {
                    name: '<i class="zmdi zmdi-image-o"></i> Thumbnails</a>',
                    link: 'component-thumbnails.html'
                },
                {
                    name: '<i class="zmdi zmdi-view-carousel"></i> Carousels',
                    link: 'component-carousels.html'
                },
                {
                    name: '<i class="zmdi zmdi-window-maximize"></i> Modals',
                    link: 'component-modals.html'
                },
                {
                    name: '<i class="zmdi zmdi-pin-help"></i> Tooltip &amp; Popover',
                    link: 'component-tooltip.html'
                },
                {
                    name: '<i class="zmdi zmdi-view-headline"></i> Progress Bars',
                    link: 'component-progress-bars.html'
                },
                {
                    name: '<i class="zmdi zmdi-n-2-square"></i> Pagination',
                    link: 'component-pagination.html'
                },
                {
                    name: '<i class="fa fa-info"></i> Dropdowns',
                    link: 'component-dropdowns.html'
                },
            ]
        },
        {
            name: '<i class="zmdi zmdi-folder-star-alt"></i> Extra Components',
            children : [
                {
                    name: '<i class="zmdi zmdi-card-membership"></i> Cards',
                    link: 'component-cards.html'
                },
                {
                    name: '<i class="zmdi zmdi-card-giftcard"></i> Composite Cards',
                    link: 'component-composite-cards.html'
                },
                {
                    name: '<i class="zmdi zmdi-n-6-square"></i> Counters',
                    link: 'component-counters.html'
                },
                {
                    name: '<i class="zmdi zmdi-play-circle"></i> Audio &amp; Video',
                    link: 'component-audio-video.html'
                },
                {
                    name: '<i class="zmdi zmdi-apps"></i> Masonry Layer',
                    link: 'component-masonry.html',
                },
                {
                    name: '<i class="zmdi zmdi-notifications-active"></i> SnackBar',
                    link: 'component-snackbar.html',
                },
            ]
        },
        {
            name: '<i class="zmdi zmdi-tab"></i> Collapses &amp; Tabs',
            children : [
                {
                    name: '<i class="zmdi zmdi-view-day"></i> Collapses',
                    link: 'component-collapses.html'
                },
                {
                    name: '<i class="zmdi zmdi-tab"></i> Horitzontal Tabs',
                    link: 'component-horizontal-tabs.html'
                },
                {
                    name: '<i class="zmdi zmdi-menu"></i> Vertical Tabs',
                    link: 'component-vertical-tabs.html'
                },
            ]
        },
        {
            name: '<i class="fa fa-area-chart"></i> Charts',
            children : [
                {
                    name: '<i class<i class="zmdi zmdi-chart-donut"></i> Circle Charts',
                    link: 'component-charts-circle.html'
                },
                {
                    name: '<i class="fa fa-bar-chart"></i> Bars Charts',
                    link: 'component-charts-bar.html'
                },
                {
                    name: '<i class="fa fa-line-chart"></i> Line Charts',
                    link: 'component-charts-line.html'
                },
                {
                    name: '<i class="fa fa-pie-chart"></i> More Charts',
                    link: 'component-charts-more.html'
                },
            ]
        },
    ];

    processor.registerBlockType('componentsMenu', function (content, block, blockLine, blockContent) {
        "use strict";
        var menu = '';
        var num = 1;

        menu += '<div class="col-md-3 ms-paper-menu-left-container">' +
                '<div class="ms-paper-menu-left">' +
                    '<h3 class="ms-paper-menu-title">' +
                        '<i class="zmdi zmdi-apps"></i> Components Menu' +
                        '<a role="button" data-toggle="collapse" href="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu" class="withripple"><i class="zmdi zmdi-menu"></i></a>' +
                    '</h3>' +
                    '<div class="panel-menu collapse" id="collapseMenu">' +
                        '<ul class="panel-group ms-collapse-nav" id="components-nav" role="tablist" aria-multiselectable="true">';

        for (var item in ComponentsMenu) {
            if (ComponentsMenu[item].hasOwnProperty('children')) {
                menu += generateMenu(ComponentsMenu[item].name, ComponentsMenu[item].children, block.asset ,num++);
            }
            else if (ComponentsMenu[item].hasOwnProperty('link')) {
                var active = false;
                if (block.asset === ComponentsMenu[item].link)
                    active = true;
                menu += generateLink(ComponentsMenu[item].name, ComponentsMenu[item].link, active);
            }
        }

        menu += '</ul> <!-- ms-collapse-nav -->' +
                    '</div>' +
                '</div>' +
            '</div> <!-- col-md-3 -->';

        var result = content.replace(blockLine, menu);
        return result;
      });

    function generateLink(name, link, active) {
        var result = '<li><a class="withripple';
        result += active ? ' active' : '';
        result += '" href="' + link + '">';
        result += name + '</a></li>';
        return result;
    }

    function generateMenu(name, children, active_link, num) {
        var submbenu = '';
        var active = false;
        for (var child in children) {
            if (active_link === children[child].link) {
                active = true;
                submbenu += generateLink(children[child].name, children[child].link, active);
                continue;
            }
            submbenu += generateLink(children[child].name, children[child].link, false);
        }

        var r = '<li class="panel" role="tab" id="e' + num +'">';
        r += '<a role="button" data-toggle="collapse" data-parent="#components-nav" href="#c' + num + '" aria-expanded="true" aria-controls="c' + num + '" class="';
        r += active ? '' : 'collapsed ';
        r += 'withripple">';
        r += name + '</a>';
        r += '<ul id="c' + num + '" class="panel-collapse collapse';
        r += active ? ' in' : '';
        r += '" role="tabpanel" aria-labelledby="e' + num + '">';
        r += submbenu;
        r+= '</ul></li>';
        return r;
    }
};
