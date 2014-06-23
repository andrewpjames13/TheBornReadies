var gulp      = require('gulp');
var usemin    = require('gulp-usemin');
var uglify    = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rev       = require('gulp-rev');

gulp.task('usemin', function() {
  gulp.src('public/*.html')
    .pipe(usemin({
      js: [uglify(), rev()],
      css: [minifycss(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});