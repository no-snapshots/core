import { expect } from '@jest/globals';
import { ReactElement } from 'react';
import { renderHTML } from './utils/render-html';
import saveFile from './utils/save-file';
import { ElementStorageObject } from '../types';

const htmlBuilder: ElementStorageObject[] = []

expect.extend({
  toMatchImage: function toMatchImage(Element: ReactElement) {
    htmlBuilder.push({
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
  saveFile(JSON.stringify(htmlBuilder));
});

export {};
