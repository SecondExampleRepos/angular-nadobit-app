import gulp from 'gulp';
import ts from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import del from 'del';

// Create a TypeScript project
const tsProject = ts.createProject('tsconfig.json');

// Clean the output directory
gulp.task('clean', () => {
    return del(['dist']);
});

// Compile TypeScript files
gulp.task('scripts', () => {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

// Watch for changes in TypeScript files
gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', gulp.series('scripts'));
});

// Default task
gulp.task('default', gulp.series('clean', 'scripts', 'watch'));