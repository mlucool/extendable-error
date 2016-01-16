/**
 * ES5 POC, for ES6 see the spec
 */

var ErrorWithData = require('extendable-error').ErrorWithData;

console.log(new ErrorWithData("I'm an error!", {hello: "world", sweet: "dreams"}));
