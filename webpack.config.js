var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry:"./app/app.js",
    output:{
        path:__dirname + "/public/js",
        filename:"app.js"
    },
    devServer: { 
        inline: true
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                query:{
                    presets:['react','es2015','stage-0'],
                    plugins:['transform-class-properties']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle:false, sourcemap:false})
    ]
};