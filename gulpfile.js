var gulp = require("gulp")
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var pipeline = require('readable-stream').pipeline;
var htmlmin = require('gulp-htmlmin');
var babel = require("gulp-babel");
const image = require('gulp-image');

gulp.task('sass', function() {
    return gulp.src('public/scss/*.scss')
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist/css'))
});

gulp.task("compressHtml", function(){
    return gulp.src('public/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
    .pipe(gulp.dest('dist/'))
});

gulp.task("compressJs", function(){
    return gulp.src('public/js/*.js')
    // .pipe(babel({
    //     presets: ['env'],
    //     plugins: ["@babel/plugin-transform-modules-umd"]

    // }))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task("compressServer", function(){
    return gulp.src('server.js')
    .pipe(babel({
        // presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('image', function () {
    gulp.src('public/images/*')
      .pipe(image())
      .pipe(gulp.dest('dist/images'));
  });

gulp.task('watch', function(){
    gulp.watch('public/scss/*.scss', gulp.series('sass'));
    gulp.watch('public/scss/*.scss', gulp.series('image'));
    gulp.watch('public/*.html', gulp.series('compressHtml'));  
    gulp.watch('public/js/*.js', gulp.series('compressJs'));
    // gulp.watch('server.js', gulp.series('compressServer'));
    
})