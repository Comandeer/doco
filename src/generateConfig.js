function generateConfig() {
	return {
		source: './src',
		destination: './docs',
		plugins: [
			{
				name: 'esdoc-standard-plugin'
			}
		]
	};
}

export default generateConfig;
