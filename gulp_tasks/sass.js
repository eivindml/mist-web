var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var dotenv = require('dotenv').config({
	'path': '../'
});
var dotenvExpand = require('dotenv-expand')(dotenv);
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src(process.env.PATH_CSS_SRC)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(gulp.dest(process.env.PATH_CSS_DIST))
		.pipe(browserSync.stream());
});