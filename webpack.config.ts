import path from "path";
import {buildWebpackConfig} from "./configs/webpack/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./configs/webpack/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.ts"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
    }

    const PORT = env.port;
    const mode = env.mode || BuildMode.development;
    const isDev = mode === BuildMode.development ;

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
}