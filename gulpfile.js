var dotenv = require('dotenv').config({})
var dotenvExpand = require('dotenv-expand')(dotenv)
var requireDir = require('require-dir')('./gulp_tasks')
var gulp = require('gulp')

gulp.task('build', ['images', 'sass', 'scripts'])
gulp.task('default', ['build'])
