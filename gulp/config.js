module.exports = {
    environment : 'dev',
    concat: true,
    primaryColor: 'indigo',
    shine: '600',
    headerClass: 'ms-header-primary',
    navbarClass: 'ms-navbar-primary',
    navbarMode: false,
    allColors: false,
    compress: false,

    themes : ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'],
    shines : ['300', '400', '500', '600', '700', '800'],

    headers : ['header-primary', 'header-dark', 'header-white'],
    navbars : ['navbar-primary', 'navbar-dark', 'navbar-white'],

    folders : {
        dist : 'dist',
        assets: 'assets',
        plugins: 'plugins',
        public: 'public'
    },

    plugins : {
        js : [
            'bower_components/html5shiv/dist/html5shiv.min.js',
            'bower_components/respond/dest/respond.min.js',
        ],
        jsConcat : [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery.cookie/jquery.cookie.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/bootstrap-select/dist/js/bootstrap-select.min.js',
            'bower_components/holderjs/holder.min.js',
            'bower_components/Slidebars/dist/Slidebars.min.js',
            'bower_components/matchHeight/dist/jquery.matchHeight-min.js',
            'bower_components/prism/prism.js',
            'bower_components/prism/plugins/line-numbers/prism-line-numbers.min.js',
            'bower_components/wow/dist/wow.min.js',
            'bower_components/plyr/dist/plyr.js',
            'bower_components/imagesloaded/imagesloaded.pkgd.min.js',
            'bower_components/masonry/dist/masonry.pkgd.min.js',
            'bower_components/waypoints/lib/jquery.waypoints.min.js',
            'bower_components/jquery.counterup/jquery.counterup.min.js',
            'bower_components/chart.js/dist/Chart.bundle.min.js',
            'bower_components/chartjs-plugin-deferred/dist/chartjs-plugin-deferred.min.js',
            'bower_components/circles/circles.min.js',
            'bower_components/owl.carousel/dist/owl.carousel.min.js',
            'bower_components/jquery.countdown/dist/jquery.countdown.min.js',
            'bower_components/mixitup/build/jquery.mixitup.min.js',
            'bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
            'bower_components/typed.js/dist/typed.min.js',
            "bower_components/snackbar/dist/snackbar.min.js"
        ],
        css : [
            'bower_components/animate.css/animate.min.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap-select/dist/css/bootstrap-select.min.css',
            'bower_components/font-awesome/css/font-awesome.min.css',
            'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
            'bower_components/Slidebars/dist/Slidebars.min.css',
            'bower_components/prism-theme-one-dark/prism-onedark.css',
            'bower_components/Yamm3/yamm/yamm.css',
            'bower_components/plyr/dist/plyr.css',
            'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
            'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
            "bower_components/snackbar/dist/snackbar.min.css"
        ],
        fonts : [
            'bower_components/bootstrap/dist/fonts/*',
            'bower_components/font-awesome/fonts/*',
            'bower_components/material-design-iconic-font/dist/fonts/*'
        ],
        img : [
            'bower_components/owl.carousel/dist/assets/owl.video.play.png'
        ]
    },
};
