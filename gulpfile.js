// declare gulp
const { series } = require('gulp');

/*

  Public tasks are exported from your gulpfile, 
  which allows them to be run by the gulp command.
  Private tasks are made to be used internally, 
  usually used as part of series() or parallel() composition.

*/

// The `clean` function is not exported so it can be considered a private task.
// (because export.build isn't including this)
// It can still be used within the `series()` composition.
const clean = (cb) => {
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
const build = (cb) => {
  cb();
}

// you can check entire task by typing `gulp --tasks`
exports.build = build;
exports.default = series(clean, build);