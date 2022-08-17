"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processFile = void 0;
require("node-self");
const render_component_1 = require("./render-component");
const save_instance_image_1 = require("./save-instance-image");
const react_1 = __importDefault(require("react"));
const path_1 = __importDefault(require("path"));
const get_vert_dir_1 = require("./get-vert-dir");
const processFile = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    const fileReturnedData = require(path_1.default.join((0, get_vert_dir_1.getVertDir)(), 'tmp', 'builds', filePath));
    let ValidReactElement = null;
    let reactFn = null;
    for (reactFn of Object.values(fileReturnedData)) {
        try {
            const possibleReactElement = react_1.default.createElement(reactFn);
            if (react_1.default.isValidElement(possibleReactElement)) {
                ValidReactElement = possibleReactElement;
                break;
            }
        }
        catch (e) {
            // do nothing
        }
    }
    if (!ValidReactElement) {
        return;
    }
    const html = (0, render_component_1.renderHTML)(ValidReactElement);
    yield (0, save_instance_image_1.saveInstanceImage)(html, filePath);
});
exports.processFile = processFile;
