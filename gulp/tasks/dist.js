var gulp      = require('gulp');

gulp.task('dist', ['clean'], function() {
  gulp.start('build');
});