import fs from 'fs';
import { TestContentObject } from '../../types';
import { TEST_CONTENT_FILE } from '../../constants';

const updateFileTest = (elementData: TestContentObject) => {
  const data = JSON.parse(fs.readFileSync(TEST_CONTENT_FILE, 'utf-8'));

  data.push(elementData)

  fs.writeFileSync(TEST_CONTENT_FILE, JSON.stringify(data));
}

export { updateFileTest };
