var gulp = require('gulp');

var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('clean', function () {
	return gulp.src('production/')
	.pipe(clean());
});

gulp.task('copyIndex', function () {
	return gulp.src('index-production.html')
	.pipe(rename('index.html'))
	.pipe(gulp.dest('production/'));
});

gulp.task('copyImages', function () {
	return gulp.src('images/*')
	.pipe(gulp.dest('production/images'));
});

gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function () {
	return es.merge([
		gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-route/angular-route.min.js']),
		gulp.src(['js/**/*.js']).pipe(concat('scripts.js'))
	])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('production/js'));
});

gulp.task('htmlmin', function () {
	return gulp.src('view/*.html')
	.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
	.pipe(gulp.dest('production/view'))
});

gulp.task('cssmin', function () {
	return gulp.src('css/*.css')
	.pipe(cleancss())
	.pipe(concat('styles.min.css'))
	.pipe(gulp.dest('production/css'));
});


gulp.task('production', function (cb) {
	return runSequence(['clean','sass'], ['jshint', 'uglify', 'htmlmin', 'cssmin', 'copyIndex', 'copyImages'], cb)
});