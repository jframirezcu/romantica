var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var minify      = require('gulp-minify');
var stylus      = require('gulp-stylus');
var image       = require('gulp-image');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var changed     = require('gulp-changed');
var nib         = require('nib');
var connect     = require('connect')
var files       = ['views/*.php','views/**/*.php']

// PATHS
const BASE_DIR        = 'includes/'

const IMAGES_PATH     = `${BASE_DIR}/img`

gulp.task('styles', function(done) {
    gulp.src(['includes/stylus/*.styl'])
        .pipe(stylus({
            compress: true,
            use: nib()
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('includes/css/'))
        done();
});

gulp.task('scripts', function(done) {
    gulp.src('includes/js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true ,
            ignoreFiles: ['-min.js']
        }))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('includes/js/dist'))
        done();
});


gulp.task('image', function (done) {
    gulp.src('includes/img/originals/*')
        .pipe(changed('includes/img/'))
        .pipe(image())
        .pipe(gulp.dest('includes/img/'));
        done();
});

gulp.task('server', function(done) {
    browserSync.init({
        files: files,
        open: 'external',
        host: 'romantica.test',
        proxy: 'romantica.test',
    });
    // Watchers
    gulp.watch(["./includes/stylus/**/*.styl"], gulp.series('styles'));
    gulp.watch("./includes/js/*.js", gulp.series('scripts'));
    gulp.watch("./includes/img/originals/*", gulp.series('image'));
    done();
});


gulp.task('default', gulp.parallel('server'), done => {
    done()
});

 
 