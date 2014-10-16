'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');

// Coffeescript
gulp.task('coffee', function() {
  gulp.src('src/app/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('src/app'))
});

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('src/{app,components}/**/*.js', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
  gulp.watch('src/app/**/*.coffee', ['coffee']);
});
