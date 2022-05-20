const path=require('path');
module.exports={
    mode: 'development',
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js', //filename:'bundle.[contenthash].js'
        path:path.resolve(__dirname,'dist'),
        publicPath:'/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    devtool:'inline-source-map',
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
    }
}
