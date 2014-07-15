var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean', function(cb){

	del(['build/js'],cb)
})

gulp.task('scripts', ['clean'], function(){
	
	return gulp.src('./src/*.js').
		pipe(uglify()).
		pipe(concat('all.min.js')).
		pipe(gulp.dest('build/js'));
});

gulp.task('watch',function(){

	gulp.watch(['./src/*.js'], ['scripts']);
});

gulp.task('default', ['scripts']);