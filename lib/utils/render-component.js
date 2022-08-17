"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHTML = void 0;
const server_1 = __importDefault(require("react-dom/server"));
const renderHTML = (component) => {
    return server_1.default.renderToStaticMarkup(component);
};
exports.renderHTML = renderHTML;
