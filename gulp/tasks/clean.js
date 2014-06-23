var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['dist/', 'public/css/', 'public/js/'], {read: false})
    .pipe(clean());
});