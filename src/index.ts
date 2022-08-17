import { getFilesThatMatchInclude } from './utils/get-files-that-match-include';
import { getFilesThatCanRegress } from './utils/get-files-that-can-regress';
import { processFile } from './utils/process-file';
import { preSetup } from './utils/pre-setup';
import { createDiff } from './utils/create-diff';
import {compileFiles} from "./utils/compile-files";

const runTest = async () => {
  preSetup();

  const files = await getFilesThatMatchInclude();

  const regressableFiles = getFilesThatCanRegress(files);

  const compiledFiles = await compileFiles(regressableFiles);


  await Promise.all(compiledFiles.map(processFile));
  //
  // createDiff();
};

runTest();
