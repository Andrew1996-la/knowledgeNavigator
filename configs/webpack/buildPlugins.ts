import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css",
            chunkFilename: "style/[name].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ]
}