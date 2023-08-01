import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) {
    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(),
        devServer: isDev? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}