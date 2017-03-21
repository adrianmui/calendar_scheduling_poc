module.exports = function (processor) {
    var OmailMenu = [
        {
            name: '<i class="fa fa-paper-plane"></i> Create a New Deployment',
            children : [
                {
                    name: '<i class="fa fa-envelope"></i> Regular',
                    link: 'component-typography.html'
                },
                {
                    name: '<i class="fa fa-refresh"></i> Recurring',
                    link: 'component-headers.html'
                },
                {
                    name: '<i class="fa fa-child"></i> Edit example',
                    link: 'omail-edit.html'
                },      
            ]
        },
        {
            name: '<i class="fa fa-search"></i> Search Deployments',
            children : []
        }
    ];

    processor.registerBlockType('omailMenu', function (content, block, blockLine, blockContent) {
        "use strict";
        var menu = '';
        var num = 1;

        menu += '<div class="col-md-3 ms-paper-menu-left-container">' +
                '<div class="ms-paper-menu-left">' +
                    '<h3 class="ms-paper-menu-title">' +
                        '<i class="zmdi zmdi-apps"></i> Deployment Menu' +
                        '<a role="button" data-toggle="collapse" href="#collapseMenu" aria-expanded="false" aria-controls="collapseMenu" class="withripple"><i class="zmdi zmdi-menu"></i></a>' +
                    '</h3>' +
                    '<div class="panel-menu collapse" id="collapseMenu">' +
                        '<ul class="panel-group ms-collapse-nav" id="components-nav" role="tablist" aria-multiselectable="true">';

        for (var item in OmailMenu) {
            if (OmailMenu[item].hasOwnProperty('children')) {
                menu += generateMenu(OmailMenu[item].name, OmailMenu[item].children, block.asset ,num++);
            }
            else if (OmailMenu[item].hasOwnProperty('link')) {
                var active = false;
                if (block.asset === OmailMenu[item].link)
                    active = true;
                menu += generateLink(OmailMenu[item].name, OmailMenu[item].link, active);
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
