const path = require('path');
SRC_DIR = 'client/src';
DIST_DIR = 'client/dist';

module.exports = {
    entry: `${SRC_DIR}/index.js`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR
    },

    module: {
        rules: [
            {
                test: '/\.(js|jsx)$/',
                exclude: /node_modules/,
                loader: 'babel_loader'
            }
        ]
    },
    
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
