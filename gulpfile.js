var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var tsconfig = require('tsconfig-glob');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var PROJECT_ROOT = __dirname;
var PROJECT_PATH = {
    'scss': PROJECT_ROOT + '/private/scss/',
    'css': PROJECT_ROOT + '/static/css/',
};
var PROJECT_PATTERNS = {
    'scss': [
        PROJECT_PATH.scss + '**/*.scss',
        '!' + PROJECT_PATH.scss + '**/*.min.scss',
        '!' + PROJECT_PATH.scss + 'libs/*.scss'
    ]
};

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['index.html', 'static/**/*', '!static/**/*.ts'], { base : './' })
        .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function () {
    return gulp.src([
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            'node_modules/node-uuid/uuid.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/immutable/dist/immutable.js',
            'systemjs.config.js'
        ])
        .pipe(gulp.dest('dist/static/js/lib'))
});

// linting
gulp.task('tslint', function () {
    return gulp.src('static/js/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/static/js/'));
});

// update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
    return tsconfig({
        configPath: '.',
        indent: 4
    });
});

// Run browsersync for development
gulp.task('serve', ['build'], function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch(['index.html', 'static/**/*'], ['buildAndReload']);
});

gulp.task('scss', function () {
    return gulp.src(PROJECT_PATTERNS.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(PROJECT_PATH.css));
});
gulp.task('scss:watch', function () {
    gulp.watch(PROJECT_PATTERNS.scss, ['scss']);
});

gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets', 'scss']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
