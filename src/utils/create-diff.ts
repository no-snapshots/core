import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { getConfigFile } from './get-config-file';
import axios from 'axios';

const createDiff = () => {
  const formData = new FormData();

  const allTests = fs.readdirSync(path.join(process.cwd(), '.vert/uploads'));

  allTests.map((fileName: string) => {
    // @ts-ignore
    formData.append('files', fs.createReadStream(path.join(process.cwd(), '.vert/uploads', fileName)));
    // @ts-ignore
    formData.append('testName', fileName.replace('.png', ''));
  });

  axios(`${getConfigFile().service}/project/test/diff`, {
    data: formData,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export { createDiff };
