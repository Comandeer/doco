import chai from 'chai';
import rimraf from 'rimraf';
import { resolve } from 'path';
import { existsSync } from 'fs';
import doco from '../src/index.js';

const expect = chai.expect;

function removeDocs() {
	rimraf.sync( resolve( __dirname, './**/docs' ) );
	rimraf.sync( resolve( __dirname, './**/.external-ecmascript.js' ) );
}

describe( 'doco', () => {
	beforeEach( () => {
		process.chdir( resolve( __dirname, '..' ) );
		removeDocs();
	} );

	after( () => {
		removeDocs();
	} );

	it( 'is a function', () => {
		expect( doco ).to.be.a( 'function' );
	} );

	it( 'returns a promise', () => {
		process.chdir( resolve( './tests/fixtures/package1' ) );

		expect( doco() ).to.be.instanceOf( Promise );
	} );

	it( 'generates docs', () => {
		process.chdir( resolve( './tests/fixtures/package1' ) );

		return doco().then( () => {
			expect( existsSync( resolve( './docs' ) ) ).to.be.true;
		} );
	} );

	it( 'rejects if invalid package is encountered', () => {
		process.chdir( resolve( './tests/fixtures/invalid' ) );

		return doco().catch( ( error ) => {
			expect( error ).not.to.be.null;
		} );
	} );
} );
