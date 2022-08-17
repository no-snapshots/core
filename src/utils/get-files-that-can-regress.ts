import fs from 'fs';

const getFilesThatCanRegress = (matchedFiles: string[]) => {
  return matchedFiles.filter((filePath) => fs.readFileSync(filePath, 'utf-8').includes('@vert'));
};

export { getFilesThatCanRegress };
