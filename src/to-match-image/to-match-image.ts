import { expect } from '@jest/globals';
import { ReactElement } from 'react';
import { renderHTML } from './utils/render-html';
import {  updateFileTest } from './utils/update-file-test';
import fs from "fs";
import { TEST_CONTENT_FILE } from '../constants';

beforeAll(() => {
  fs.writeFileSync(TEST_CONTENT_FILE, JSON.stringify([]));
});

expect.extend({
  toMatchImage: function toMatchImage(Element: ReactElement) {
    updateFileTest({
        html: renderHTML(Element),
        title: expect.getState().currentTestName || 'Unknown Test',
      });

    return {
      message: () => 'The test has been added to the image queue',
      pass: true,
    }
  },
});

afterAll(() => {
  // fs.rmSync('image-content.tmp');
});

export {};
