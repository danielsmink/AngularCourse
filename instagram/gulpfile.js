'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCSS = require('gulp-minify-css');

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['js', 'minify-css'], function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('css/*.css', ['minify-css']);
});