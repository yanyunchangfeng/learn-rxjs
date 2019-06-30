const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    context: path.join(process.cwd(),'src','app'),
    entry:'./index.ts',
    output: {
        path: path.join(process.cwd(),'dist'),
        filename: '[name].bundle.js',
        chunkFilename: "[name].bundle.js"
    },
    resolve:{
        extensions:['*','.js','.ts']
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
            {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader:'url-loader',
                  options:{
                    limit:10000
                  }
                }
              ]
            },
            {
              test: /\.svg$/,
              loader: 'svg-url-loader'
            },
            {
              test: /\.(woff|woff2|tff|eot|ttf)$/i,
              use: [
                {
                  loader:'url-loader',
                  options:{
                    limit:10000
                  }
                }
              ]
            },
            {
                test:/\.ts$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:path.join(process.cwd(),'src/index.temp.html'),
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       })
    ] 
}