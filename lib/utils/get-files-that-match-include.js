"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesThatMatchInclude = void 0;
const glob_1 = __importDefault(require("glob"));
const get_config_file_1 = require("./get-config-file");
const path_1 = __importDefault(require("path"));
const getFilesThatMatchInclude = () => new Promise((resolve, reject) => (0, glob_1.default)(path_1.default.join(process.cwd(), (0, get_config_file_1.getConfigFile)().include), {}, (er, files) => {
    if (er) {
        reject(er);
        return;
    }
    resolve(files);
}));
exports.getFilesThatMatchInclude = getFilesThatMatchInclude;
