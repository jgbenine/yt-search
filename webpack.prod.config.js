const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    context: __dirname,
    // Adicionar aqui em caso de code splitting
    // https://webpack.js.org/guides/code-splitting/
    entry: {
        main: ['./src/js/main.js', './src/scss/style.scss'],
    },
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, 'dist')

    },
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: ['node_modules/**'],
    },
    // Detalhamento das mensagens
    stats: 'minimal',
    // Modo de compilação.
    mode: 'production',
    module: {
        rules: [{
                test: '/\.js$/i',
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ["last 2 versions", "ie 11"]
                                    }
                                }

                            ]
                        ],
                    },
                }

            },

            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                sourceMap: 'inline',
                                plugins: ['autoprefixer'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.css',
        }),
        new CleanWebpackPlugin(),
    ],

};