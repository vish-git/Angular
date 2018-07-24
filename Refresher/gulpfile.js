var gulp = require('gulp');
var ts = require('gulp-typescript');
const debug = require('gulp-debug');
var dest = require('gulp-dest');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('build', function() {
var tsResult = tsProject.src().pipe(tsProject);
return tsResult.js.pipe(gulp.dest('./dist/'));
});