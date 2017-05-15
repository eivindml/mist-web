var dotenv = require('dotenv').config({
  'path': '../'
});
var dotenvExpand = require('dotenv-expand')(dotenv);
var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');

var options = {
  cssFilename: 'fonts.css'
};

gulp.task('fonts', function() {
  return gulp.src('./fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('public/fonts'));
});
