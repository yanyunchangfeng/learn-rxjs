const commonConfig = require('./webpack.common');
const path = require('path')
const merge =  require('webpack-merge');
module.exports = merge(commonConfig, {
    devServer:{
        port:3001,
        open: true,
        contentBase:path.join(process.cwd(),'dist')
    }
})
