import { renderHTML } from './render-component';
import { saveInstanceImage } from './save-instance-image';
import React, { FunctionComponent, ReactElement } from 'react';

const processFile = async (filePath: string) => {
  const fileReturnedData = require(filePath);

  let ValidReactElement: ReactElement | null = null;
  let reactFn: FunctionComponent | null = null;

  for (reactFn of Object.values<FunctionComponent>(fileReturnedData)) {
    try {
      const possibleReactElement = React.createElement(reactFn as FunctionComponent);

      if (React.isValidElement(possibleReactElement)) {
        ValidReactElement = possibleReactElement;

        break;
      }
    } catch (e) {
      // do nothing
    }
  }

  if (!ValidReactElement) {
    return;
  }

  const html = renderHTML(ValidReactElement);

  await saveInstanceImage(html, reactFn!.name);
};

export { processFile };
