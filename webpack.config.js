// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',
    entry: "./public/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: '/',
        assetModuleFilename: 'assets/[name][ext]',
    },
    devtool: argv.mode === 'production' ? 'source-map' : 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/assets/MWA-icon.png",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'public/assets', 
                    to: 'assets',
                    noErrorOnMissing: true, 
                    globOptions: {
                        // This will copy all files from public/assets to dist/assets
                        dot: true,
                        gitignore: true,
                    },
                
                },
                {
                    from: 'public/assets/MWA-icon.png',
                    to: 'MWA-icon.png',
                },
                {
                    from: 'public/assets/x-mark-16.png',
                    to: 'x-mark-16.png',
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },
});