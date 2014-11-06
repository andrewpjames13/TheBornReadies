var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config');

gulp.task('serve', function() {
  gulp.src(config.root)
    .pipe(webserver({
      'fallback': 'index.html',
      'livereload': true,
      'open': true,
      'port': config.port
    }));
});
