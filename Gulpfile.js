var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');

gulp.task('bSync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

//Compile SASS into CSS, auto display on browser
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(bs.reload({stream: true})); // prompts a reload 
        // .pipe(browserSync.stream());
});

// Run Gulp Task - 'Watch' (SASS Changes, Auto Reload Browser)
gulp.task('watch', ['bSync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});