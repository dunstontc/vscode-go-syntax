const gulp  = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => { });

gulp.task('compile-go', () => {
  gulp.src('./src/go/*.json5')
    .pipe(merge({
      fileName: "go.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('compile-gotemplate', () => {
  gulp.src('./src/gotemplate/*.json5')
    .pipe(merge({
      fileName: "gotemplate.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('compile-gohtml', () => {
  gulp.src('./src/gohtml/*.json5')
    .pipe(merge({
      fileName: "gohtml.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.json5', [ 'compile-go', 'compile-gohtml', 'compile-gotemplate' ]);
});
