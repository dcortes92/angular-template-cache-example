var gulp = require("gulp");
var connect = require("gulp-connect");
var templateCache = require("gulp-angular-templatecache");

var templateCacheOptions = {
	config: {
		module: "templateApp"
	},
	source: "partials/**/*.html",
	destination: "js"
}

gulp.task("connect", function () {
	connect.server({
		port: 8000,
		livereload: true,
		root: ""
	});
});

gulp.task("templates", function () {
	return gulp.src(templateCacheOptions.source)
		.pipe(templateCache(templateCacheOptions.config))
		.pipe(gulp.dest(templateCacheOptions.destination));
});

gulp.task("default", ["connect"]);