const gulp = require('gulp');
const debug = require('gulp-debug');
const clean = require('gulp-clean');
const htmlLint = require('gulp-html-lint');
const htmlbeautify = require('gulp-html-beautify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('default', ["build"]);

gulp.task('clean', () => {
    return gulp.src(['./index.html', 'tmp/**/*', 'css/**/*'], {read: false})
        .pipe(debug({title: '[clean]'}))
        .pipe(clean());
});
 
gulp.task('build', ['html', 'css'], () =>
    gulp.src('tmp/**/*')
        .pipe(debug({title: '[build]'}))
        .pipe(gulp.dest('./'))
);


gulp.task('html', ['html:beutifier'], () => {
    const options = {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyElements: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
    }
    
    gulp.src('src/index.html')
        .pipe(debug({title: '[html:minifier]'}))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('html:beutifier', () => {
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

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(debug({title: '[sass]'}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});
 
gulp.task('sass:watch', () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});


gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./assets/css'));
});