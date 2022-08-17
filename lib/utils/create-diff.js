"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiff = void 0;
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const get_config_file_1 = require("./get-config-file");
const axios_1 = __importDefault(require("axios"));
const createDiff = () => {
    const formData = new form_data_1.default();
    const allTests = fs_1.default.readdirSync(path_1.default.join(process.cwd(), '.vert/uploads'));
    allTests.map((fileName) => {
        // @ts-ignore
        formData.append('files', fs_1.default.createReadStream(path_1.default.join(process.cwd(), '.vert/uploads', fileName)));
        // @ts-ignore
        formData.append('testName', fileName.replace('.png', ''));
    });
    (0, axios_1.default)(`${(0, get_config_file_1.getConfigFile)().service}/project/test/diff`, {
        data: formData,
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};
exports.createDiff = createDiff;
