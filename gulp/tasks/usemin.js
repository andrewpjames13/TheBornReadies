var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('usemin', function() {
  gulp.src('public/*.html')
    .pipe(usemin({
      js: [uglify()],
      css: [minifycss()]
    }))
    .pipe(gulp.dest('dist/'));
});