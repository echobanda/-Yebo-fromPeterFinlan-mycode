var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function() {
  return gulp.src("./scss/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
    outputStyle: 'epanded',
    sourceComments: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css"))
});

gulp.task("watch", function() {
  gulp.watch("scss/**/*.scss", ["sass"]);

});
