var gulp = require("gulp"),
	// concat = require("gulp-concat"),
	less = require('gulp-less');
	// uglify = require("gulp-uglify");

// gulp.task("default",function(){
// 	return gulp.src([
// 			"src/angular2-polyfills.js"
// 		])
//     .pipe(concat("lib.min.js"))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("dist"));
// });


	gulp.task("less",function(){
		return gulp.src(["less/*.less"])
			.pipe(less())
			.pipe(gulp.dest("css"));
	})

	gulp.task("watch",  () => {
	   gulp.watch("less/.less",['less']);
	});


	gulp.task('default', ['less','watch']);
