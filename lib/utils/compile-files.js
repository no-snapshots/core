"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileFiles = void 0;
const webpack_1 = __importDefault(require("webpack"));
const path_1 = __importDefault(require("path"));
const get_vert_dir_1 = require("./get-vert-dir");
const compileFiles = (filePaths) => {
    return new Promise((resolve, reject) => {
        const overrideableConfig = {
            mode: 'production',
        };
        const fileMap = {};
        const compiledFileLocations = [];
        filePaths.forEach(fileName => {
            const compiledFileName = fileName
                .replace(`${process.cwd()}/`, '')
                .replace(/\//g, '_');
            compiledFileLocations.push(compiledFileName);
            fileMap[compiledFileName] = fileName;
        });
        const baseWebpackConfig = {
            entry: fileMap,
            output: {
                libraryTarget: 'umd',
                filename: '[name].js',
                chunkFilename: "[name]-[id].js",
                path: path_1.default.resolve(path_1.default.join((0, get_vert_dir_1.getVertDir)(), 'tmp/builds'))
            },
        };
        const config = require(path_1.default.join((0, get_vert_dir_1.getVertDir)(), 'webpack.config.js'));
        const mergedRules = Object.assign(Object.assign(Object.assign({}, overrideableConfig), config), baseWebpackConfig);
        (0, webpack_1.default)(mergedRules, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            if (stats === null || stats === void 0 ? void 0 : stats.hasErrors()) {
                reject(new Error(JSON.stringify(stats === null || stats === void 0 ? void 0 : stats.toJson().errors, null, 2)));
            }
            resolve(compiledFileLocations);
        });
    });
};
exports.compileFiles = compileFiles;
