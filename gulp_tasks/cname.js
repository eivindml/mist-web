var gulp = require('gulp');

gulp.task('cname', function() {
  gulp.src('./CNAME')
    .pipe(gulp.dest('./public/'));
});
