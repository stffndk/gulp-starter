var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass   = require('gulp-ruby-sass');


// TASKS

// Scripts task
gulp.task('scripts', function(){
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
});

// Styles task
gulp.task('styles', function() {
  return sass('scss/')
  .pipe(gulp.dest('build/css'));
});


// Watch task
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'styles', 'watch']);
