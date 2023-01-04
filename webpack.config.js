const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForStyles = {
    test: /\.css$/,
    use: [
        "style-loader","css-loader"
    ]
}
const rules = [ruleForStyles];
module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve( __dirname, "build"),
    },
    module: { rules } ,
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
       
    ],
    devServer:{
        port:8081,
        open:true,
        compress:true,
        hot:true,
        liveReload:true,
    }
    
}