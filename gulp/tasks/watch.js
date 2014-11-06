var gulp = require('gulp');
var path = require('path');

gulp.task('watch', function(){
  gulp.watch('src/**/*.coffee', ['scripts']);
  gulp.watch('src/styles/**', ['styles']);
  gulp.watch('src/views/**', ['templates']);
});
