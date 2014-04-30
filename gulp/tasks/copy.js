var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src('public/images/**/*').pipe(gulp.dest('dist/images/'));
});