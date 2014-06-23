var gulp       = require('gulp');
var eco        = require('gulp-eco');
var concat     = require('gulp-concat');

gulp.task('templates', function () {
  return gulp.src('src/views/**/*.eco')
    .pipe(eco())
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/js/'));
});