var format = require('util').format;
var default_format = '[%s] %s';
var funcs = {
  log: console.log.bind(console),
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console)
};

// patch when require()d
patch(default_format);

// patch when invoked
module.exports = patch;

function patch(s, fn) {
  if (typeof s === 'function') {
    fn = s;
    s = null;
  }
  s = s || default_format;
  fn = fn || default_function;
  Object.keys(funcs).forEach(function(k) {
    console[k] = function() {
      arguments[0] = format(s, fn(), arguments[0]);
      funcs[k].apply(console, arguments);
    };
  });
}

// the default date format to print
function default_function() {
  return new Date().toISOString();
}
