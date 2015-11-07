var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connectTask', function () {
    connect.server({
        root: '',
        port: 9999,
        livereload: true
    });
});
gulp.task('reload',function(){
    gulp.src('*.html').pipe(connect.reload());
});
gulp.task('watchTask', function () {
    return gulp.watch('*.html',['reload'])
});

gulp.task('default',['connectTask','watchTask'] );