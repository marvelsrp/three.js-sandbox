const gulp = require('gulp');
const babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('js', () => {
  return gulp.src('src/app.js')
    .pipe(babel({
      plugins: ['transform-runtime']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  gulp.run('js');
  gulp.watch('src/app.js', ['js']);
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
