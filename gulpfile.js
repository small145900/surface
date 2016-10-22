gulp = require("gulp"),
concat = require("gulp-concat"),
uglify = require('gulp-uglify');
minifyCss = require('gulp-minify-css');
rename = require('gulp-rename');
ts = require('gulp-typescript');
// htmlmin = require('gulp-htmlmin');
// browserify = require('browserify');
// imagemin = require('gulp-imagemin');
// gutil = require('gulp-util');

gulp.task("minify-css",function(){
	return gulp.src(["css/*.css"])
    .pipe(concat("main.css"))
		.pipe(minifyCss())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest("dist/css"));
});

gulp.task("minify-lib-css",function(){
	return gulp.src([
			"node_modules/bootstrap/dist/css/bootstrap.min.css",
			"node_modules/font-awesome/css/font-awesome.min.css"
		])
    .pipe(concat("lib.min.css"))
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"));
});

gulp.task("minify-lib-js",function(){
	return gulp.src([
			"node_modules/jquery/dist/jquery.min.js",
			"node_modules/bootstrap/dist/js/bootstrap.min.js",
			"node_modules/core-js/client/shim.min.js",
			"node_modules/zone.js/dist/zone.js",
			"node_modules/reflect-metadata/Reflect.js",
			"node_modules/systemjs/dist/system.src.js",
			"systemjs.config.js"
		])
    .pipe(concat("lib.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("less",function(){
	return gulp.src(["less/*.less"])
		.pipe(less())
		.pipe(gulp.dest("css"));
})

gulp.task("minify-ts",function(){
	return gulp.src(["src/*.ts"])
    .pipe(ts({
    	noImplicitAny: true,
    	out: 'main.min.js'
    }))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task("less",function(){
	return gulp.src(["less/*.less"])
		.pipe(less())
		.pipe(gulp.dest("css"));
});

gulp.task("html",function(){
	return gulp.src(["templates/*/*.html"])
		.pipe(gulp.dest("dist/views"));
});

gulp.task("watch",  () => {
   gulp.watch("less/.less",['less']);
});

gulp.task('default', ['minify-lib-css','minify-css','minify-lib-js','minify-ts']);
