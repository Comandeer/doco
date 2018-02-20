import ESDoc from 'esdoc';
import generateConfig from './generateConfig.js';

function doco() {
	return new Promise( ( resolve, reject ) => {
		try {
			const config = generateConfig();

			ESDoc.generate( config );
			resolve();
		} catch ( error ) {
			reject( error );
		}
	} );
}

export default doco;
