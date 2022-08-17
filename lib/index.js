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
Object.defineProperty(exports, "__esModule", { value: true });
const get_files_that_match_include_1 = require("./utils/get-files-that-match-include");
const get_files_that_can_regress_1 = require("./utils/get-files-that-can-regress");
const process_file_1 = require("./utils/process-file");
const pre_setup_1 = require("./utils/pre-setup");
const compile_files_1 = require("./utils/compile-files");
const runTest = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, pre_setup_1.preSetup)();
    const files = yield (0, get_files_that_match_include_1.getFilesThatMatchInclude)();
    const regressableFiles = (0, get_files_that_can_regress_1.getFilesThatCanRegress)(files);
    const compiledFiles = yield (0, compile_files_1.compileFiles)(regressableFiles);
    yield Promise.all(compiledFiles.map(process_file_1.processFile));
    //
    // createDiff();
});
runTest();
