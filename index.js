var format = require('util').format;
var default_format = '[%s] %s';
var funcs = {
  'log': console.log,
  'info': console.info,
  'warn': console.warn,
  'error': console.error
};

// patch when require()d
patch(default_format);

// patch when invoked
module.exports = patch;

function patch(s, fn) {
  fn = fn || Date;
  Object.keys(funcs).forEach(function(k) {
    console[k] = function() {
      if (arguments[0])
        arguments[0] = format(s, fn(), arguments[0]);
      funcs[k].apply(this, arguments);
    };
  });
}
