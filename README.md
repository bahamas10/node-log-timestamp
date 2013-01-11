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
[2012-08-23T20:08:32.000Z] After log-timestamp
```

You can specify a custom format as well

``` js
require('log-timestamp')('date="%s" message="%s"');
console.log('hello %s', 'world');
```

yields

```
date="2012-08-23T20:08:37.000Z" message="hello world"
```

Get fancy and pass in a function to call instead of `new Date().toISOString()`

``` js
require('log-timestamp')('[%s] %s', function() {
  return Date.now();
});
console.log('hello world');
```

yields

```
[1345752562432] hello world
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
