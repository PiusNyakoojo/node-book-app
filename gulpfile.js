let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');

let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'), {
            verbose: true
        })
        .pipe(jscs());
});

gulp.task('inject', () => {
	let wiredep = require('wiredep').stream;

	let options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib'
	};

	return gulp.src('./src/views/*.html')
			.pipe(wiredep(options))
			.pipe(gulp.dest('./src/views')); // write to the destination file
});