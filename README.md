# extendable-error

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> ES6 base class for errors. Also an Error class with built in constructor for data.

Install `extendable-error` as a dependency:

```shell
npm install --save extendable-error
```
## Example 
```javascript
const myError = new ErrorWithData('foobar',  {bar: 'baz'});
```

## Rational
The code is very trivial and likely most people will just copy and paste it than install.

The intent of the derived class ErrorWithData error in this repo is for
[FSA](https://github.com/acdlite/flux-standard-action) usage with [bluebird](http://www.bluebirdjs.com) promises.
With this  error you can follow the bluebird spec of all rejects must be errors, but also easily pass data to a reducer
(e.g. via [redux promise middleware](https://github.com/pburtchaell/redux-promise-middleware)). There are obviously
many other use cases of an error object with additional data in a known place. There are even more uses of new classes
of errors and using ES6 to define them.

## Known Issues
I do expect a new ErrorWithData to be an instance of ErrorWithData and Error. Chai claims it is only the latter
(which is better than only the former).
i.e. This fails: ```expect(ewd).to.be.an.instanceof(ErrorWithData);```

License
-------------
[Apache-2.0 License](http://www.apache.org/licenses/LICENSE-2.0)

[npm-url]: https://npmjs.org/package/extendable-error
[npm-image]: https://badge.fury.io/js/extendable-error.png

[travis-url]: http://travis-ci.org/mlucool/extendable-error
[travis-image]: https://secure.travis-ci.org/mlucool/extendable-error.png?branch=master

[coveralls-url]: https://coveralls.io/github/mlucool/extendable-error?branch=master
[coveralls-image]: https://coveralls.io/repos/mlucool/extendable-error/badge.svg?branch=master&service=github

[depstat-url]: https://david-dm.org/mlucool/extendable-error
[depstat-image]: https://david-dm.org/mlucool/extendable-error.png
