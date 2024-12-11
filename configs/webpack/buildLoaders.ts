import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
    }

    return [
        typescriptLoader,
        styleLoader
    ]
}