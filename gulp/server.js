'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      middleware: middleware
    },
    browser: browser,
    port: 4001
  });

}

gulp.task('serve', ['watch', 'coffee'], function () {
  browserSyncInit([
    'app',
    '.tmp'
  ], [
    '.tmp/app/**/*.css',
    'app/assets/images/**/*',
    'app/*.html',
    'app/**/*.html',
    'app/**/*.js'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['app', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});
