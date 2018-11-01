var gulp = require('gulp');
var concat = require('gulp-concat');
var dotenv = require('dotenv').config({
    'path': '../'
});
var dotenvExpand = require('dotenv-expand')(dotenv);

gulp.task('scripts', function() {
    gulp.src(process.env.PATH_JS_SRC)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(process.env.PATH_JS_DIST));
});