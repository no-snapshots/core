"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const get_files_that_can_regress_1 = require("../get-files-that-can-regress");
const readFileSyncSpy = jest.spyOn(fs_1.default, 'readFileSync');
describe('getFilesThatCanRegress', () => {
    beforeEach(() => {
        readFileSyncSpy.mockReturnValueOnce(`
// @vert

Pass
            `);
        readFileSyncSpy.mockReturnValueOnce(`
Don't read me
            `);
    });
    it('should return files that can regress', () => {
        const result = (0, get_files_that_can_regress_1.getFilesThatCanRegress)(['file1.js', 'file2.js']);
        expect(result).toEqual(['file1.js']);
        expect(readFileSyncSpy).toHaveBeenCalledWith('file1.js', 'utf-8');
        expect(readFileSyncSpy).toHaveBeenCalledWith('file2.js', 'utf-8');
    });
});
