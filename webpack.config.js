const path = require('path')

module.exports = {
    entry: '/src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.js'],
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            '.js': ['.js', '.ts']
        }
    }
}
