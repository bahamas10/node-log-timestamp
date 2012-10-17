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

You can specify a custom format as well

``` js
require('log-timestamp')('date="%s" message="%s"');
console.log('hello %s', 'world');
```

yields

```
date="Wed Oct 17 2012 13:35:02 GMT-0700 (PDT)" message="hello world"
```

Get fancy and pass in a function to call instead of `Date()`

``` js
require('log-timestamp')('[%s] %s', function() {
  return new Date().toJSON();
});
console.log('hello world');
```

yields

```
[2012-10-17T20:42:18.608Z] hello world
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
