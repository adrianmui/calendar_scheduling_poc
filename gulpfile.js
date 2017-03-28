const gulp = require('gulp');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const jshint = require('gulp-jshint');
const beautify = require('gulp-beautify');
const please = require('gulp-pleeease');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const sassThemes = require('gulp-sass-themes');
const uglify = require('gulp-uglify');
const prettify = require('gulp-prettify');
const processhtml = require('gulp-processhtml');
const del = require('del');
const path = require('path');
const runSequence = require('run-sequence').use(gulp);
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const merge = require('merge-stream');

const source = require('vinyl-source-stream');
const babel = require('gulp-babel');
const glob = require('glob');
const browserify = require('browserify');
const pump = require('pump');

const config = require('./gulp/config');

var paths = {
    public: path.join(config.folders.public),
    assets: path.join(config.folders.public, config.folders.assets),
    html: path.join(config.folders.public),
    js: path.join(config.folders.public, config.folders.assets, 'js'),
    jsConcat: path.join(config.folders.public, config.folders.assets, 'js'),
    fonts: path.join(config.folders.public, config.folders.assets, 'fonts'),
    media: path.join(config.folders.public, config.folders.assets, 'media'),
    css: path.join(config.folders.public, config.folders.assets, 'css'),
    img: path.join(config.folders.public, config.folders.assets, 'img'),
    plugins: path.join(config.folders.public, config.folders.assets, config.folders.plugins)
};

var themeOptions = {
    primaryColor: argv.color || config.primaryColor,
    shineColor: argv.shine || config.shine,
    headerClass: argv.header || config.headerClass,
    navbarClass: argv.navbar || config.navbarClass,
    navbarMode: argv.navbarMode || config.navbarMode
};

var targets = {
    public: {
        environment: 'public',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass
        },
    },
    navbar: {
        environment: 'navbar',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass + ' navbar-mode'
        },
    },
    demo: {
        environment: 'demo',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass
        },
    },
    dev: {
        environment: 'dev',
        data: {
            assets: config.folders.assets,
            primaryColor: themeOptions.primaryColor + '-' + themeOptions.shineColor,
            headerClass: themeOptions.headerClass,
            navbarClass: themeOptions.navbarClass
        },
    },
};

gulp.task('plugins', function() {
    gulp.src(config.plugins.js)
        .pipe(gulp.dest(paths.js));

    gulp.src(config.plugins.jsConcat)
        .pipe(gulpif(config.concat, concat('plugins.min.js')))
        .pipe(gulpif(config.concat, uglify()))
        .pipe(gulp.dest(paths.jsConcat));

    gulp.src(config.plugins.css)
        .pipe(gulpif(config.concat, concat('plugins.min.css')))
        .pipe(gulp.dest(paths.css));

    gulp.src(config.plugins.fonts)
        .pipe(gulp.dest(paths.fonts));

    gulp.src(config.plugins.img)
        .pipe(gulp.dest(paths.img));
});

gulp.task('html', function() {
    gulp.src(['src/html/**/*.html', '!src/html/layout/**/*'])
        .pipe(changed(path.join(paths.html)))
        .pipe(processhtml({
            recursive: true,
            process: true,
            strip: true,
            environment: targets[config.environment].environment,
            data: targets[config.environment].data,
            customBlockTypes: [(
                'gulp/components-menu.js',
                'gulp/omail-menu.js'
            )]
        }))
        .pipe(gulpif(config.compress, prettify({ indent_size: 2 })))
        .pipe(gulp.dest(path.join(paths.html)))
        .pipe(connect.reload());
});

gulp.task('html:public', function() {
    gulp.src(['src/html/**/*.html', '!src/html/layout/**/*'])
        .pipe(processhtml({
            recursive: true,
            process: true,
            strip: true,
            environment: targets[config.environment].environment,
            data: targets[config.environment].data,
            customBlockTypes: [(
                'gulp/components-menu.js',
                'gulp/omail-menu.js'
            )]
        }))
        .pipe(gulpif(config.compress, prettify({ indent_size: 2 })))
        .pipe(gulp.dest(path.join(paths.html)))
        .pipe(connect.reload());
});

gulp.task('html:release', function() {
    for (var h in config.headers) {
        targets.public.data.headerClass = 'ms-' + config.headers[h];

        for (var n in config.navbars) {
            targets.public.data.navbarClass = 'ms-' + config.navbars[n];
            gulp.src(['src/html/**/*.html', '!src/html/layout/**/*'])
                .pipe(processhtml({
                    recursive: true,
                    process: true,
                    strip: true,
                    environment: targets[config.environment].environment,
                    data: targets[config.environment].data,
                    customBlockTypes: [(
                        'gulp/components-menu.js',
                        'gulp/omail-menu.js'
                    )]
                }))
                .pipe(prettify({ indent_size: 2 }))
                .pipe(gulp.dest(paths.html + '/' + config.headers[h] + '-' + config.navbars[n]))
                .pipe(connect.reload());
        }
    }

    for (var nav in config.navbars) {
        config.environment = 'navbar';
        targets.navbar.data.navbarClass = 'ms-' + config.navbars[nav] + ' navbar-mode';
        gulp.src(['src/html/**/*.html', '!src/html/layout/**/*'])
            .pipe(processhtml({
                recursive: true,
                process: true,
                strip: true,
                environment: targets[config.environment].environment,
                data: targets[config.environment].data,
                customBlockTypes: [(
                    'gulp/components-menu.js',
                    'gulp/omail-menu.js'
                )]
            }))
            .pipe(prettify({ indent_size: 2 }))
            .pipe(gulp.dest(path.join(paths.html, config.navbars[nav])))
            .pipe(connect.reload());
    }
});

gulp.task('js', function() {
    gulp.src(['src/js/**/*.js', '!src/js/configurator.js', '!src/js/pages/**/*'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulpif(config.compress, concat('app.min.js')))
        .pipe(gulpif(config.compress, uglify()))
        .pipe(gulp.dest(paths.js))
        .pipe(connect.reload());
    gulp.src('src/js/configurator.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulpif(config.compress, concat('configurator.min.js')))
        .pipe(gulpif(config.compress, uglify()))
        .pipe(gulp.dest(paths.js))
        .pipe(connect.reload());
    gulp.src('src/js/pages/**/*')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulpif(config.compress, uglify()))
        .pipe(gulp.dest(paths.js))
        .pipe(connect.reload());
});


gulp.task('themes', function(cb) {
    var out = [];
    for (var color in config.themes) {
        for (var shine in config.shines) {
            var color_light = Number(config.shines[shine]) - 100;
            var color_dark = Number(config.shines[shine]) + 100;
            out.push(gulp.src(['src/scss/_config.scss'])
                .pipe(replace('light-blue-400', 'change400'))
                .pipe(replace('light-blue-500', 'change500'))
                .pipe(replace('light-blue-600', 'change600'))
                .pipe(replace('change400', config.themes[color] + '-' + color_light.toString()))
                .pipe(replace('change500', config.themes[color] + '-' + config.shines[shine]))
                .pipe(replace('change600', config.themes[color] + '-' + color_dark.toString()))
                .pipe(replace(' !default', ''))
                .pipe(rename('_' + config.themes[color] + '-' + config.shines[shine] + '.scss'))
                .pipe(gulp.dest('src/scss/themes')));
        }
    }
    return merge(out);
});

function generateNames() {
    var result = [];
    for (var color in config.themes) {
        for (var shine in config.shines) {
            result.push('' + config.themes[color] + '-' + config.shines[shine]);
        }
    }
    return result;
}


gulp.task('scss', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(gulpif(config.allColors, sassThemes('src/scss/themes/_*.scss', generateNames())))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(config.compress, please({
            "autoprefixer": true,
            "filters": true,
            "rem": true,
            "opacity": true
        })))
        .pipe(gulpif(config.compress, rename({
            suffix: '.min',
            extname: '.css'
        })))
        //.pipe(gulpif(!config.compress, rename('style.' + config.defaultTheme + '.min.css')))
        .pipe(gulp.dest(paths.css))
        .pipe(connect.reload());
});

gulp.task('img', function() {
    gulp.src('src/img/**/*')
        .pipe(gulpif(config.compress, imagemin()))
        .pipe(gulp.dest(paths.img))
        .pipe(connect.reload());
});

gulp.task('fonts', function() {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest(paths.fonts))
        .pipe(connect.reload());
});

gulp.task('media', function() {
    gulp.src('src/media/**/*')
        .pipe(gulp.dest(paths.media))
        .pipe(connect.reload());
});

gulp.task('clean', function() {
    return del.sync([
        paths.public,
        'src/scss/themes/*'
    ]);
});

gulp.task('watch', function() {
    gulp.watch(['src/html/**/*'], ['html']);
    gulp.watch(['src/html/layout/**/*'], ['html:public']);
    gulp.watch(['src/js/**/*'], ['js']);
    gulp.watch(['src/scss/**/*'], ['scss']);
    gulp.watch(['src/img/**/*'], ['img']);
    gulp.watch(['src/fonts/**/*'], ['fonts']);
    gulp.watch(['src/media/**/*'], ['media']);
});

gulp.task('connect', function() {
    connect.server({
        root: config.folders.public,
        port: 8080,
        livereload: true
    });
});

gulp.task('default', function() {
    runSequence(
        ['connect']
    );
});

gulp.task('babelify', () => {
    var misc = glob.sync('src/angular/app.js');
    var services = glob.sync('src/angular/services/**.js');
    var controllers = glob.sync('src/angular/controllers/**.js');
    var javascripts = [].concat(misc, services, controllers);
    console.log('list of javascript file paths: ', javascripts);
    return gulp.src(javascripts)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('transpiled'))
        .pipe(connect.reload());
});

gulp.task('browserify', () => {
    var javascripts = glob.sync('transpiled/bundle.js');
    var b = browserify({
        debug: true,
        entries: javascripts,
        extensions: ['.js']
    });

    return b.bundle()
        .on('error', (err) => {
            console.log(err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./public/js", { overwrite: false }))
        .pipe(connect.reload());

});

gulp.task('uglify', (cb) => {
    pump([gulp.src('public/js/bundle.js'), uglify({options: { mangle: false}}), gulp.dest('public/js')], cb);
})

gulp.task('fe', ()=> {
    runSequence('babelify', 'browserify', ['uglify']);
});

gulp.task('public', function() {
    config.compress = true;
    config.environment = 'public';
    config.allColors = true;

    config.themes = [themeOptions.primaryColor];
    config.shines = [themeOptions.shineColor];


    if (themeOptions.navbarMode) {
        config.environment = 'navbar';
    }

    runSequence(
        'clean',
        'themes', ['plugins', 'html:public', 'js', 'scss', 'img', 'fonts', 'media']
        //['html:public', 'js', 'scss', 'img']
    );
});

gulp.task('demo', function() {
    config.allColors = true;
    config.compress = true;
    config.environment = 'demo';

    runSequence(
        'clean',
        'themes', ['plugins', 'html', 'js', 'scss', 'img', 'fonts', 'media']
    );
});

gulp.task('dev', function() {
    config.environment = 'dev';

    runSequence(
        'clean', ['plugins', 'html', 'js', 'scss', 'img', 'fonts', 'media']
    );
});

gulp.task('work', function() {
    runSequence(
        'dev', ['connect', 'watch']
    );
});

gulp.task('release', function() {
    config.allColors = true;
    config.compress = true;
    config.environment = 'public';

    runSequence(
        'clean',
        'themes', ['plugins', 'html:release', 'js', 'scss', 'img', 'fonts', 'media']
    );
});