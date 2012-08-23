log-timestamp
=============

Prepend timestamps to functions like console.log, console.warn, etc

Example
-------

``` js
console.log('Before log-timestamp');
require('log-timestamp');
console.log('After log-timestamp');
```
yields
```
Before log-timestamp
[Thu Aug 23 2012 13:08:32 GMT-0700 (PDT)] After log-timestamp
```

Install
------

Install locally to use as a module

    npm install log-timestamp

Tests
-----

    npm test

License
-------

MIT Licensed
