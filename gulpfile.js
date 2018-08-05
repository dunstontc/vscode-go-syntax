const gulp  = require('gulp');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => { });

gulp.task('compile-json', () => {
  gulp.src('./src/**/*.json5')
    .pipe(merge({
      fileName: "go.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.json5', [ 'compile-json' ]);
});
