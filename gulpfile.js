var gulp = require("gulp"),
    babelify = require("babelify"),
    browserify = require("browserify"),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream"),
    imagemin = require("gulp-imagemin"),
    buffer = require('vinyl-buffer'),
    uglify = require("gulp-uglify")



// Compile sass into CSS and auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});

// move index.html from src to build
gulp.task('moveHTML', function () {
    return gulp.src(['./src/index.html'])
        .pipe(gulp.dest("./build"))
        .pipe(browserSync.stream());
})

gulp.task('moveJS', function () {
    return gulp.src(['./node_modules/jquery/dist/js/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/howler/dist/howler.min.js'])
        .pipe(gulp.dest("./build"));
})

gulp.task('moveImages', function () {
    return gulp.src(['./src/assets/*.jpg'])
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest("./build"));
})

gulp.task("build", function () {
    return browserify({
        entries: ["./src/js/index.js"]
    })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./build"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./build"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/js/*.js", ['build']);
    gulp.watch("src/*.html", ['moveHTML']);

});

gulp.task('default', ['moveHTML', 'moveJS', 'moveImages', 'build', 'serve']);



