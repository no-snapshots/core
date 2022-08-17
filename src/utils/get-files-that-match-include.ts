import glob from 'glob';
import { getConfigFile } from './get-config-file';
import path from 'path';

const getFilesThatMatchInclude = (): Promise<string[]> =>
  new Promise((resolve, reject) =>
    glob(path.join(process.cwd(), getConfigFile().include), {}, (er, files) => {
      if (er) {
        reject(er);

        return;
      }

      resolve(files);
    }),
  );

export { getFilesThatMatchInclude };
