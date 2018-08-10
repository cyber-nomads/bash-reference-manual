const gulp = require('gulp');
const debug = require('gulp-debug');
const clean = require('gulp-clean');
const htmlLint = require('gulp-html-lint');
const htmlbeautify = require('gulp-html-beautify');
 


gulp.task('default', ["build"]);

gulp.task('clean', () => {
    return gulp.src('./index.html', {read: false})
        .pipe(debug({title: '[clean]'}))
        .pipe(clean());
});
 
gulp.task('build', () =>
    gulp.src('src/**/*')
        .pipe(debug({title: '[build]'}))
        .pipe(gulp.dest('./'))
);


gulp.task('html', ['html:beutifier', 'html:linter']);

gulp.task('html:beutifier', function() {
  gulp.src('src/index.html')
    .pipe(debug({title: '[html:beutifier]'}))
    .pipe(htmlbeautify())
    .pipe(gulp.dest('./src'));
});

gulp.task('html:linter', () => {
    return gulp.src('src/index.html')
        .pipe(debug({title: '[html:linter]'}))
        .pipe(htmlLint())
        .pipe(htmlLint.format())
        .pipe(htmlLint.failOnError());
});