var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;

gulp.task('serve', function() {
  	exec('npm run lite', function (err, stdout, stderr) {
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
  	});
});

gulp.task('sass', function() {
  return gulp.src('./public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  return gulp.watch('./public/scss/*.scss', ['sass']);
});


gulp.task('start', ['sass', 'sass:watch', 'serve']);