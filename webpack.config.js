var path = require('path')

module.exports = {
    entry:'./app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:  /\.js$/,
                exclude:/node_modules/,
                use:'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
        ],
       
    },

    devServer:{
        port:8080,
        contentBase:path.join(__dirname,'public')
    },
    mode:'development'

}
