'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');

// Coffeescript
gulp.task('coffee', function() {
  gulp.src('app/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('app'))
});

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('app/**/*.scss', ['styles']);
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('app/**/*.coffee', ['coffee']);
});
