import webpack from 'webpack';
import path from "path";
import {getVertDir} from "./get-vert-dir";



const compileFiles = (filePaths: string[]): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        const overrideableConfig = {
            mode: 'production',
        }

        const fileMap: Record<string, string> = {};
        const compiledFileLocations: string[] = [];

        filePaths.forEach(fileName => {
            const compiledFileName = fileName
                .replace(`${process.cwd()}/`, '')
                .replace(/\//g, '_');

            compiledFileLocations.push(compiledFileName);
            fileMap[compiledFileName] = fileName
        })

        const baseWebpackConfig = {
            entry: fileMap,
            output: {
                libraryTarget: 'umd',
                filename: '[name].js',
                chunkFilename: "[name]-[id].js",
                path: path.resolve(path.join(getVertDir(), 'tmp/builds'))
            },
        }

        const config = require(path.join(getVertDir(), 'webpack.config.js'));

        const mergedRules = {
            ...overrideableConfig,
            ...config,
            ...baseWebpackConfig,
        };

        webpack(mergedRules, (err, stats) => {
            if (err) {
               reject(err);

               return;
            }

            if (stats?.hasErrors()) {
                reject(new Error(JSON.stringify(stats?.toJson().errors, null, 2)))
            }

            resolve(compiledFileLocations);
        });
    })
}

export { compileFiles };