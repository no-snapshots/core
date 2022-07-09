// @ts-ignore
import Window from 'window';
import { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';

const renderHTML = (component: ReactElement) => {
  const window = new Window();
  const document = window.document;

  const container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);

  ReactDOM.createRoot(container).render(component);

  return container.innerHTML;
}

export { renderHTML };
