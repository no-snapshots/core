"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesThatCanRegress = void 0;
const fs_1 = __importDefault(require("fs"));
const getFilesThatCanRegress = (matchedFiles) => {
    return matchedFiles.filter((filePath) => fs_1.default.readFileSync(filePath, 'utf-8').includes('@vert'));
};
exports.getFilesThatCanRegress = getFilesThatCanRegress;
