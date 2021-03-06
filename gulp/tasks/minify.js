var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var streamqueue = require('streamqueue');

gulp.task('minify', function() {

  var stream = streamqueue({objectMode: true},
    gulp.src(['src/templates/**/*.html']).pipe(templateCache({
      standalone: true,
      root: 'src/templates/'
    })),
    gulp.src(['src/*.js'])
  )
  .pipe(concat('angular-schema-form-ionic-autocomplete.js'))
  .pipe(gulp.dest('./dist'))
  .pipe(uglify())
  .pipe(rename('angular-schema-form-ionic-autocomplete.min.js'))
  .pipe(gulp.dest('./dist'));

  return stream;
});
