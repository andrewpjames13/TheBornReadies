var gulp = require('gulp');

gulp.task('build',['copy', 'templates', 'scripts', 'styles'], function() {
  gulp.start('usemin');
});
