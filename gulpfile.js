var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");

gulp.task("sass",function(){
	gulp.src("sass/**/*scss")
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest("css/"));


});

gulp.task("js",function(){
	gulp.src(["js/**/*.js","!js/min/**/*.js"])
	.pipe(uglify())
	.pipe(gulp.dest("js/min"));
});
