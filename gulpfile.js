var dotenv = require('dotenv').config({});
var dotenvExpand = require('dotenv-expand')(dotenv);
var requireDir = require('require-dir')('./gulp_tasks');
var gulp = require('gulp');

gulp.task('cname', function() {
  gulp.src('./CNAME')
    .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['pug', 'images', 'sass', 'scripts', 'cname']);
gulp.task('default', ['build', 'serve', 'watch']);
