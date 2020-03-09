const path = require('path');
const webpack = require('webpack');

module.exports = {
    // Where application starts & where to start building the app
    entry: './src/index.js', 

    // Mode, this is specified to avoid set the parameter when server runs
    mode: 'development',

    // helps define how your exported javascript modules are transformed and which ones are included according to the given array of rules
    module: {
        rules: [
            {
                // Rule to transform ES6 and JSX
                test: /\.(js|jsx)$/, // .js or .jsx files
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                // processing CSS. Since we’re not pre-or-post-processing our CSS, we just need to make sure to add style-loader and css-loader to the use property
                test: /\.css$/, // .css files
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // The resolve property allows us to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    // where to put our bundled code
    output: {
        path: path.resolve(__dirname, 'dist/'),

        // property specifies what directory the bundle should go in, and also tells webpack-dev-server where to serve files from
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    // webpack-dev-server configuration
    devServer: {
        // where static content comes from
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        // This publicPath tells the server where our bundled code actually is
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },

    // Avoid realoding browser when source code change
    plugins: [new webpack.HotModuleReplacementPlugin()]
};