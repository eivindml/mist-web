var gulp = require('gulp');
var browserSync = require('browser-sync');
var dotenv = require('dotenv').config({
  'path': '../'
});
var dotenvExpand = require('dotenv-expand')(dotenv);

var pug = require('gulp-pug');

gulp.task('pug', function buildHTML () {
  return gulp.src('src/pug/index.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest(process.env.PATH_DIST))
})

gulp.task('serve', function() {
  browserSync.init({
    server: process.env.PATH_DIST,
    notify: false
  });
});
