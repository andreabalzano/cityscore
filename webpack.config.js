const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";

if(process.env.NODE_ENV === "production"){
    mode = "production";
};

module.exports = {
    mode: mode,

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin(
            {template: "./src/index.html",
            favicon: "./src/img/favicon.ico",}
        ), 
    ],

    devServer: {
        static: ['./dist'],
        hot: true,
    },

    output: {
        clean: true,
    },
};