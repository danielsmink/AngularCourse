'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    reload = browserSync.reload;

gulp.task('css', function () {
  gulp.src('./css/**/*.css')
    .pipe(reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src('./js/**/*.js')
    .pipe(sourcemaps.init())
    .on('error', handleError)
    .pipe(concat('app.js'))
    .on('error', handleError)
    .pipe(ngAnnotate())
    .on('error', handleError)
    .pipe(uglify())
    .on('error', handleError)
    .pipe(sourcemaps.write())
    .on('error', handleError)
    .pipe(gulp.dest('./dist'))
    .pipe(reload({stream: true}));
});

gulp.task('lint', function() {
  gulp.src('./js/**/*.js')
    .on('error', handleError)
    .pipe(jshint('./js/.jshintrc'))
    .on('error', handleError)
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', handleError)
    .pipe(jshint.reporter('fail'))
    .on('error', handleError);
});

gulp.task('watch', function () {
  browserSync({
    proxy: 'localhost:8080',
    port: 9000
  });
  gulp.watch(['./js/**/*.js'], ['lint']);
  gulp.watch(['./js/**/*.js'], ['js']);
  gulp.watch(['./css/**/*.css'], ['css']);
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('default', ['lint', 'js']);