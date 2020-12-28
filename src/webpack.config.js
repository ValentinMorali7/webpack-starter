const HtmlWebPackPlugin = requiere('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            test: /\.html$/,
            use: [
                {
                    loader: html-loader,
                    options: { minimize: false }
                    options: {
                        attribues: false,
                    }
                }
            ]
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}