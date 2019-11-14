var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    // entry: ["react-hot-loader/patch", "./src/index.js"],  for hot reloading
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, exclude: "/node_modules/" , use: "ts-loader"},
            {test: /\.(js)$/, exclude: "/node_modules/", use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

module.exports = config;