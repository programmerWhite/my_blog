//process.noDeprecation = true;
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry: {//输入文件
        'index': './src/js/index.js'//‘index’是生成文件的名称，，多个生成文件名将匹配output里的[name],'index'后面的需要被加载到index的文件的路径，可用数组方式加载多个文件，如['./src/js/index.js'，'./src/js/base.js']
    },
    output: {//输出文件
        path: 'build',// 输出js和图片的目录
        filename: '[name].bundle.js'
    },
    module: {//模块加载器配置
        loaders: [{
            test: /\.less$/,//正则匹配拓展名为···的文件
            include: path.join(__dirname, './src/less'),//需要被加载文件的路径
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,//这个文件除外
            loader: 'html-loader'
        },{
            test: /\.js?$/,
            include: path.join(__dirname, './src/js'),
            loader: 'babel-loader'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=srclication/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192' // 内联的base64的图片地址，图片要小于8k，直接的url的地址则不解析
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    resolve: {
        alias: {
            common: require('path').resolve(__dirname, './src')
        }
    },
    plugins: [
        //单独生成html文件
        new HtmlWebpackPlugin({
            filename: '../index.html',//生成的html及存放路径，相对于path
            template: './src/index.html',//载入文件及路径
            publicPath: "js/",//这是build文件下html文件引用js文件的路径
            chunks: ['index'],//需要引入的chunk，不配置就会引入所有页面的资源
        }),
        // 使用browser-sync实时刷新页面
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./build/'] }//会默认访问./build/index.html
        })
    ]
};