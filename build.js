var webpack = require('webpack');
var config = require('./webpack.config.js');

webpack(config).watch({
}, function(err, stats) {
    console.log('Build complete.')
    if (err) {
        console.log('Error: ', err)
    }
    var statsJson = stats.toJson()
    if (statsJson.errors.length > 0) {
        console.log('Errors:')
        statsJson.errors.forEach(function(error) {
            console.log(error)
        })
    }
    if (statsJson.warnings.length > 0) {
        console.log('Warnings:')
        statsJson.warnings.forEach(function(warning) {
            console.log(warning)
        })
    }
});
