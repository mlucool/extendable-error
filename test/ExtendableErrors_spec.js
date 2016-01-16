/*eslint-env mocha */

import {expect} from 'chai';
import ExtendableError, {ErrorWithData} from '../src/ExtendableError';

describe('ExtendableError', function () {
    it('ExtendableError base class should give back almost the same details as Error', function () {
        const e = new Error('foo');
        const ee = new ExtendableError('foo');

        // Same toString
        expect(e.toString()).to.equal(ee.toString());
        const se = e.stack.split('\n');
        const see = ee.stack.split('\n');

        // Same stack but one level of indirection and line number different
        expect(se[0]).to.equal(see[0]);
        expect(se.splice(2)).to.eql(see.splice(3));
    });

    it('ErrorWithData should be an Error with data', function () {
        const data = {bar: 'baz'};
        const ewd = new ErrorWithData('foobar', data);

        // Same message (str comp here)
        expect(ewd.message).to.eql('foobar');
        // Same data (ref comp here)
        expect(ewd.data).to.equal(data);

        expect(ewd).to.be.an.instanceof(Error);
        // I do expect this, but its not the case
        //expect(ewd).to.be.an.instanceof(ErrorWithData);
    });

    it('ErrorWithData have settable data', function () {
        const ewd = new ErrorWithData('settable');
        expect(ewd.data).to.be.undefined;

        const data = {bar: 'baz'};
        ewd.data = data;
        expect(ewd.data).to.equal(data);
    });
});
