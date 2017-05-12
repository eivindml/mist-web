var dotenv = require('dotenv').config({});
var dotenvExpand = require('dotenv-expand')(dotenv);
var dotenv = require('dotenv').config({
  'path': '../'
});
var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('deploy', shell.task(
  ['git subtree push --prefix public origin gh-pages']
))
