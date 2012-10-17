#!/usr/bin/env node

console.log('Before log-timestamp');
require('../')('date="%s" message="%s"');
console.log('After log-timestamp');
