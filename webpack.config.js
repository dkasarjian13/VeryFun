let path = require('path');

module.exports = {
    entry: {
        'visualizer': '/js/visualizer.js',
        'visualizer2': '/js/visualizer2.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'projects'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'projects')
    }
};
