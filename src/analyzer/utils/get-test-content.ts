import fs from "fs";
import path from "path";
import { TEST_CONTENT_FILE } from '../../constants';
import { TestContentObject } from '../../types';

const getTestContents = (): TestContentObject[] => {
  try {
    return JSON.parse(fs.readFileSync(path.join(TEST_CONTENT_FILE), 'utf-8'));
  } catch (e) {
    throw new Error('There was an error reading the test content file');
  }
}

export { getTestContents };
