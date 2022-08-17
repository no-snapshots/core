import fs from 'fs';
import { getFilesThatCanRegress } from '../get-files-that-can-regress';

const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe('getFilesThatCanRegress', () => {
  beforeEach(() => {
    readFileSyncSpy.mockReturnValueOnce(
      `
// @vert

Pass
            `,
    );

    readFileSyncSpy.mockReturnValueOnce(
      `
Don't read me
            `,
    );
  });

  it('should return files that can regress', () => {
    const result = getFilesThatCanRegress(['file1.js', 'file2.js']);

    expect(result).toEqual(['file1.js']);
    expect(readFileSyncSpy).toHaveBeenCalledWith('file1.js', 'utf-8');
    expect(readFileSyncSpy).toHaveBeenCalledWith('file2.js', 'utf-8');
  });
});
