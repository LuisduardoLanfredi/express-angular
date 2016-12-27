var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    exec = require('child_process').exec, node,
    del = require('del');

const typescript = require('gulp-typescript');
var tscConfig = typescript.createProject('tsconfig.json');


gulp.task('default', ['start-server', 'watch']);

// gulp.task('clean', function () {
//   return del('dist/**/*');
//   console.log('aa');
// });

// // TypeScript compile
// gulp.task('compile', ['clean'], function () {
//   return gulp
//     .src('src/app/*.ts')
//     .pipe(typescript(tscConfig.compilerOptions))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('start-server', function(cb) {
    exec('node server.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function(cb) {
    exec('ng build -w', {maxBuffer: 1024 * 500}, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

process.on('exit', function() {
    if (node) node.kill()
    console.log('exit');
})