const path=require('path');
const CleanPlugin=require('clean-webpack-plugin');
module.exports={
    mode: 'production',
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js', //filename:'bundle.[contenthash].js'
        path:path.resolve(__dirname,'dist'),
       
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    devtool: 'eval-cheap-module-source-map',
    module:{
        rules:[
            {
                test:/\.ts$/, //reg expression to test file end with .ts extension
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    plugins:[
new CleanPlugin.CleanWebpackPlugin()
    ]
}