#!/usr/bin/env node

console.log('Before log-timestamp');
require('../')('[%s] %s', function() {
  return new Date().toJSON();
});
console.log('After log-timestamp');
