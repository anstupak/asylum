const { series, parallel, watch, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const rimraf = require("rimraf");
const del = require("del");
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')

function browser_sync() {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    })
}

function watch_files() {
    watch('src/*.html', buildHtml);
    watch('src/*.js', buildScripts);
    watch('src/*.css', buildStyles);
    watch('src/**/*.{png,svg}', buildImages);
    // watch('src/*.html', series(buildHtml, reload));
    // watch('src/*.js', series(buildScripts, reload));
    // watch('src/*.css', series(buildStyles, reload));
    // watch('src/*.png', series(buildImages, reload));
}

function reload(cb) {
    browserSync.reload();
    cb()
}

function buildHtml() {
    return src('src/*.html').pipe(dest('dist/'))
}

function buildScripts() {
    return src('src/*.js').pipe(dest('dist/'))
}

function buildStyles() {
    return src('src/*.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(dest('dist/'))
}

const buildImages = series(
    function cleanImages() {
        return del(['dist/img']);
    },
    function buildImages() {
        return src('src/assets/**/*.{png,svg}')
            .pipe(dest('dist/img/'));
    },
);


function clean(cb) {
    rimraf.sync("dist");
    cb()
}

exports.build = parallel(clean, buildImages, buildScripts, buildStyles, buildHtml);

exports.watch = parallel(watch_files);