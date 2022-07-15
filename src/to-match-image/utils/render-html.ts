// @ts-ignore
import { ReactElement } from 'react';
import ReactDOM from 'react-dom/server';

const renderHTML = (component: ReactElement) => {
  return ReactDOM.renderToStaticMarkup(component);
}

export { renderHTML };
