#!/usr/bin/env node

console.log('Before log-timestamp');
require('../')('[%s] %s', function() {
  return Date.now();
});
console.log('After log-timestamp');
