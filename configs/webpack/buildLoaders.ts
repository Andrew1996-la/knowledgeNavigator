import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.css$/i,
        use: [
            options.isDev ? MiniCssExtractPlugin.loader :'style-loader',
            'css-loader',
            'postcss-loader'
        ]
    }

    return [
        typescriptLoader,
        styleLoader
    ]
}