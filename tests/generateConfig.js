import chai from 'chai';
import { resolve } from 'path';
import generateConfig from '../src/generateConfig.js';

const expect = chai.expect;

describe( 'generateConfig', () => {
	beforeEach( () => {
		process.chdir( resolve( __dirname, '..' ) );
	} );

	it( 'is a function', () => {
		expect( generateConfig ).to.be.a( 'function' );
	} );

	it( 'returns object with minimum config required', () => {
		expect( generateConfig() ).to.have.keys( [
			'source',
			'destination',
			'plugins'
		] );
	} );
} );
