var gulp = require('gulp'),
  browserSync = require('browser-sync');

// Start BrowserSync
gulp.task('browser-sync', false, function () {
  browserSync({
    server: {
      baseDir: './'
    },
    port: 7080
  });
});