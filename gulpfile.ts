var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var gulpTypings = require('gulp-typings');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'scss': PROJECT_ROOT + '/private/scss/',
    'css': PROJECT_ROOT + '/src/',
};
var PROJECT_PATTERNS = {
    'scss': [
        PROJECT_PATH.scss + '**/*.scss'
    ]
};

/**
 * Install typings.
 */
gulp.task('typings', function () {
    var stream = gulp.src('./typings.json')
        .pipe(gulpTypings());
    return stream; // by returning stream gulp can listen to events from the stream and knows when it is finished.
});

/**
 * Remove build directory.
 */
gulp.task('clean', function (callback) {
    return del(['build'], callback);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['tslint'], function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', function() {
    return gulp.src(['src/**/*', '!**/*.ts'])
        .pipe(gulp.dest('build'));
});

gulp.task('scss', function () {
    return gulp.src(PROJECT_PATTERNS.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(PROJECT_PATH.css))
        .pipe(browserSync.stream({ match: '**/*.css' }));
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'build',
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    }, function (err, bs) {
        console.log(bs.options.getIn(['urls', 'local']));
    });

    gulp.run('watch');
    gulp.watch('private/*.scss', ['scss']);
    gulp.watch(['build/**/*.html', 'build/**/*.js']).on('change', browserSync.reload);
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(['src/**/*.ts'], ['compile']).on('change', function (file) {
        console.log('TypeScript file ' + file.path + ' has been changed. Compiling.');
    });
    gulp.watch(['src/**/*.html', 'src/**/*.css'], ['resources']).on('change', function (file) {
        console.log('Resource file ' + file.path + ' has been changed. Updating.');
    });
    gulp.watch(PROJECT_PATTERNS.scss, ['scss']).on('change', function (file) {
        console.log('Styles file ' + file.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'scss'], function () {
    console.log('Building the project ...');
});