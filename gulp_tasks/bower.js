//var dotenv = require('dotenv').config({});
//var dotenvExpand = require('dotenv-expand')(dotenv);
var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var bower = require('main-bower-files')

gulp.task('bower', function() {
	var jsFilter = gulpFilter('**/*.js')
	var cssFilter = gulpFilter('**/*.css')
	return gulp.src(bower())
		.pipe(jsFilter)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest("./public/vendor/"))
	// .pipe(jsFilter.restore())
	// .pipe(cssFilter)
	// .pipe(concat('vendor.css'))
	// .pipe(gulp.dest(dist.css))
	// .pipe(cssFilter.restore())
	// .pipe(rename(function(path) {
	//   if (~path.dirname.indexOf('fonts')) {
	//     path.dirname = '/fonts'
	//   }
	// }))

})