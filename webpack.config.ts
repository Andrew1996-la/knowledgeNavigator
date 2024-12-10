import path from "path";
import {buildWebpackConfig} from "./configs/webpack/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./configs/webpack/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
}

const mode = BuildMode.development;
const isDev = mode === BuildMode.development ;

const config = buildWebpackConfig({
    mode,
    paths,
    isDev
})

export default config