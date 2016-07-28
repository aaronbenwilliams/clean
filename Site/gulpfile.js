var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
  return sass('sass', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000, '0.0.0.0');
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
  gulp.watch('sass/partials/*.scss', ['styles']);
});

gulp.task('build', function() {
    gulp.src(['js/**/*'])
        .pipe(gulp.dest('build/js/'))
    gulp.src(['css/**/*'])
        .pipe(gulp.dest('build/css/'))
    gulp.src('img/**/*')
        .pipe(gulp.dest('build/img/'))
    gulp.src('*.html')
        .pipe(gulp.dest('build/'))
});

gulp.task('default', ['express', 'watch','build'], function() {

});
