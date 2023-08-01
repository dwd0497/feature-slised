import {BuildOptions, BuildPaths} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        static: {
            directory: options.paths.output,
        },
        open: true,
        port: options.port,
        historyApiFallback: true,
    }
}