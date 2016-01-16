/**
 * Errors that you can extend with ES6 classes.
 *
 * This is based off of [http://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax]
 *
 * @module ExtendableError
 */

/**
 * The base class to extend errors from. It includes a stack trace. Direct instantiation isn't useful.
 *
 * @class ExtendableError
 * @param {string} message Error message
 */
export default class ExtendableError extends Error {
    constructor(message) {
        super(message);
        // IE may not have captureStackTrace...
        // http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor.name);
        }
        this.name = this.constructor.name;
        this.message = message;
    }
}

/**
 * An Error object with data in a known place.
 * Useful for [bluebird](https://github.com/petkaantonov/bluebird/blob/master/docs/docs/warning-explanations.md#warning-a-promise-was-rejected-with-a-non-error)
 * rejects when you want to pass data with your error.
 *
 * @class ErrorWithData
 * @param {string} message Error message
 * @param {data} [data] Data to store in error
 */
export class ErrorWithData extends ExtendableError {
    constructor(message, data) {
        super(message, ErrorWithData);
        this.data = data;
    }
}
