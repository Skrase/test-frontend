'use strict';

var gulp = require("gulp"),
	pug = require("gulp-pug"),
	sass = require("gulp-sass"),
	uglify = require("gulp-uglify"),
	babel = require("gulp-babel"),
	browserSync  = require('browser-sync');

	sass.compiler = require("node-sass");

// gulp.task("connect", function () {
// 	connect.server({
// 		port: 1337,
// 		livereload: true,
// 		root: './dist/'
// 	});
// });

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		notify: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
	})
});
function bsReload(done) { browserSync.reload(); done(); };



gulp.task("pug", function () {
	return gulp.src("src/*.pug")
		.pipe(pug({pretty: '	'}))
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({ stream: true }))
});



gulp.task("sass", function () {
	return gulp.src(['src/scss/*.scss', "!src/scss/typography/"])
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.reload({ stream: true }));
		// .pipe(connect.reload());
});

gulp.task("typography", function () {
	return gulp.src('src/scss/typography/typography.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('src/scss/typography/'))

	

});


gulp.task("babel", function () {
	return gulp.src("src/**/*.js")
	  .pipe(babel({
			presets: ['@babel/env']
	  }))
	  .pipe(uglify())
	  .pipe(gulp.dest("dist"))
	  .pipe(browserSync.reload({ stream: true }))
});

gulp.task("watch", function () {
	gulp.watch(["src/**/*.pug", "src/scss/typography/typography.css"], gulp.parallel('pug'));
	gulp.watch("src/scss/typography/typography.scss", gulp.parallel('typography'));
	gulp.watch(["src/**/*.scss", "!src/scss/typography/typography.scss"], gulp.parallel('sass'));
	gulp.watch("src/**/*.js", gulp.parallel('babel'));
});


gulp.task("default", gulp.parallel("pug", "sass", "typography", "babel", "browser-sync", "watch") );
gulp.task("build", gulp.parallel("pug", "sass", "typography", "babel") );
