var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
  return gulp.src('./src/styles/**/*.sass')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'ff 17', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./public/css'));
});
