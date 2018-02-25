// npm init
// npm install --save-dev gulp gulp-sass browser-sync
// gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	gulp.src('css/*.sass')
		.pipe(sass()) // Using gulp-sass
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./"
	});

	gulp.watch("css*.sass", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);