var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src(['public/**/*', '!public/*.html', '!public/css', '!public/css/**/*', '!public/js', '!public/js/**/*', '!public/vendor', '!public/vendor/**/*']).pipe(gulp.dest('dist/'));
});