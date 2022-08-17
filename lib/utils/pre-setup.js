"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preSetup = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const preSetup = () => {
    if (!fs_1.default.existsSync(path_1.default.join(process.cwd(), '.vert'))) {
        // tslint:disable-next-line:no-console
        console.log('Please create a .vert directory');
        process.exit(1);
    }
    if (fs_1.default.existsSync(path_1.default.join(process.cwd(), '.vert/tmp'))) {
        fs_1.default.rmdirSync(path_1.default.join(process.cwd(), '.vert/tmp'), { recursive: true });
    }
    fs_1.default.mkdirSync(path_1.default.join(process.cwd(), '.vert/tmp'));
    fs_1.default.mkdirSync(path_1.default.join(process.cwd(), '.vert/tmp/uploads'));
    fs_1.default.mkdirSync(path_1.default.join(process.cwd(), '.vert/tmp/builds'));
};
exports.preSetup = preSetup;
