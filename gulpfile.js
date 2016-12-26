var gulp  = require('gulp'),
    gutil = require('gulp-util');

gulp.task('default', ['watch']);

gulp.task('whatching-for-files', function() {
    console.log('watching for files...')
});

gulp.task('watch', function() {
    gulp.watch('src/app/*.ts', ['whatching-for-files']);
});