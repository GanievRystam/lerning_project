import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildPlugins } from './/buildPlugins';
import { buildLoaders } from './/buildLoaders';
import { buildResolvers } from './buildResolvers';
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
            mode,
            entry: paths.entry,
            module: {
            rules: buildLoaders(),
            },
            resolve: buildResolvers() ,
            plugins: buildPlugins(options),
            output: {
                filename: '[name].[contenthash].js',
                path: paths.build,
                clean: true,
            }
        }
  }