gulp = require("gulp"),
concat = require("gulp-concat"),
uglify = require('gulp-uglify');
minifyCss = require('gulp-minify-css');
rename = require('gulp-rename');
ts = require('gulp-typescript');
// tsProject = ts.createProject("tsconfig.json");

// tslint = require('gulp-tslint');

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

gulp.task("lib-css",function(){
	return gulp.src([
			"node_modules/bootstrap/dist/css/bootstrap.min.css",
			"node_modules/font-awesome/css/font-awesome.min.css"
		])
    .pipe(concat("lib.min.css"))
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"));
});

// gulp.task("minify-lib-js",function(){
// 	return gulp.src([
// 			"node_modules/jquery/dist/jquery.min.js",
// 			"node_modules/bootstrap/dist/js/bootstrap.min.js",
// 			"node_modules/core-js/client/shim.min.js",
// 			"node_modules/zone.js/dist/zone.js",
// 			"node_modules/reflect-metadata/Reflect.js",
// 			"node_modules/systemjs/dist/system.src.js",
// 			"systemjs.config.js"
// 		])
//    .pipe(concat("lib.min.js"))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("dist/js"));
// });

// gulp.task("less",function(){
// 	return gulp.src(["less/*.less"])
// 		.pipe(less())
// 		.pipe(gulp.dest("css"));
// });

gulp.task("img",function(){
	return gulp.src(["img/*"])
		.pipe(gulp.dest("dist/img"));
});

gulp.task("json",function(){
	return gulp.src(["json/*"])
		.pipe(gulp.dest("dist/json"));
});

gulp.task("templates",function(){
	return gulp.src(["templates/*/*.html"])
		.pipe(gulp.dest("dist/templates"));
});

// gulp.task("src",function(){
// 	return gulp.src(["src/*.ts"])
// 		.pipe(gulp.dest("dist/typeScript"));
// });

gulp.task("index",function(){
	return gulp.src(["index.html"])
		.pipe(gulp.dest("dist"));
});


// gulp.task("watch",  () => {
//    gulp.watch("less/.less",['less']);
// });

// gulp.task('default', []);
// gulp.task('default', [
// 	'img',
// 	'json',
// 	'index',
// 	'templates',
// 	"src",
// 	"minify-lib-js",
// 	'minify-lib-css',
// 	"minify-css",
// 	"minify-ts"
// ])
// gulp.task("compile", () => {
// 	return gulp.src(["src/*.ts"])
// 			.pipe(gulp.dest('dist/js'))
// })
// gulp.task('tslint', () => {
//     return gulp.src("src/*.ts")
//         .pipe(tslint({
//             formatter: 'prose'
//         }))
//         .pipe(tslint.report());
// });

// gulp.task("compile", () => {
//     let tsResult = gulp.src("src/*.ts")
//         .pipe(tsProject());
//     return tsResult.js
//         .pipe(gulp.dest("dist/js"));
// });

// gulp.task("resources", () => {
//     return gulp.src(["src/*", "!**/*.ts"])
//         .pipe(gulp.dest("dist/js"));
// });
gulp.task("libs", () => {
  return gulp.src([
          'core-js/client/shim.min.js',
          'systemjs/dist/system-polyfills.js',
          'systemjs/dist/system.src.js',
          'reflect-metadata/Reflect.js',
          'rxjs/**/*.js',
          'zone.js/dist/**',
          '@angular/**/bundles/**'
      ], {cwd: "node_modules/**"})
      .pipe(gulp.dest("dist/lib"));
});

// gulp.task("minify-ts",function(){
// 	return gulp.src(["src/*.ts"])
//     .pipe(ts({
//     	noImplicitAny: true,
//     	out: 'app.min.js'
//     }))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("dist/js"));
// });

gulp.task("minify-js",function(){
	return gulp.src(["src/*.js"])
		.pipe(concat("app.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

gulp.task('default', [
	'img',
	'json',
	'templates',
	'index',
	'lib-css',
	'minify-css',
	'libs',
	'minify-js'
])