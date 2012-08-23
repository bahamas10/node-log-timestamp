var format = require('util').format,
    funcs = {
      'log': console.log,
      'info': console.info,
      'warn': console.warn,
      'error': console.error
    };

Object.keys(funcs).forEach(function(k) {
  console[k] = function() {
    if (arguments[0])
      arguments[0] = format('[%s] %s', Date(), arguments[0]);
    funcs[k].apply(this, arguments);
  };
});
