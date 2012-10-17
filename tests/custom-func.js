#!/usr/bin/env node

require('../')('<<%s>> %s', function() {
  return new Date().toJSON();
});

['log', 'info', 'warn', 'error'].forEach(function(k) {
  process.stdout.write('Testing ' + k + '\n');
  console[k]('Hello %s!', 'world');
});
