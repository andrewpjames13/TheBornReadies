var gulp = require('gulp');

gulp.task('default', ['templates', 'scripts', 'styles', 'serve', 'watch'], function() {
  gulp.start('open');
});
