import chai from 'chai';
import doco from '../src/index.js';

const expect = chai.expect;

describe( 'doco', () => {

	it( 'is a function', () => {
		expect( doco ).to.be.a( 'function' );
	} );
} );
