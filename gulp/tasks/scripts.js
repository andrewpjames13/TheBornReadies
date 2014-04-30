var browserify = require('browserify');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');

gulp.task('scripts', function(){
  return browserify({
      entries: ['./src/app.coffee'],
      extensions: ['.coffee']
    })
    .bundle({debug: true})
    .on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'));
});
