const gulp = require('gulp');
const debug = require('gulp-debug');
const clean = require('gulp-clean');

gulp.task('default', ["build"]);

gulp.task('clean', () => {
    return gulp.src('./index.html', {read: false})
        .pipe(debug({title: 'Clean:'}))
        .pipe(clean());
});
 
gulp.task('build', () =>
    gulp.src('src/**/*')
        .pipe(debug({title: 'Build:'}))
        .pipe(gulp.dest('./'))
);