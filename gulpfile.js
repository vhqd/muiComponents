var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function () {
  gulp.src('static/less/*.less').pipe(less()).pipe(gulp.dest("./dist/css"));
}); 

//监视文件的变化
gulp.task("watch", function () {
  gulp.watch("static/less/*.less", ['less']);
});