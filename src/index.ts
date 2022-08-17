import { getFilesThatMatchInclude } from './utils/get-files-that-match-include';
import { getFilesThatCanRegress } from './utils/get-files-that-can-regress';
import { processFile } from './utils/process-file';
import { preSetup } from './utils/pre-setup';
import { createDiff } from './utils/create-diff';

const runTest = async () => {
  preSetup();

  const files = await getFilesThatMatchInclude();

  await Promise.all(getFilesThatCanRegress(files).map(processFile));

  createDiff();
};

runTest();
