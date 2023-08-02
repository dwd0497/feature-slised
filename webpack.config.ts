import path from 'path';
import webpack from 'webpack';
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development'
    const port = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({paths, mode, isDev, port});

    return  config;
}