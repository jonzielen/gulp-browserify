var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel');

gulp.task('scripts', function() {
    gulp.src('public/javascripts/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts/min'));
});

gulp.task('sass', function() {
    gulp.src('public/sass/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/stylesheets/'));
});

// Watch js
gulp.task('watch', function() {
    gulp.watch('public/javascripts/*.js', ['scripts']);
    gulp.watch('public/sass/*.scss', ['sass']);
});

gulp.task('default', ['scripts', 'watch']);
