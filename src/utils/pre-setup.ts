import fs from 'fs';
import path from 'path';

const preSetup = () => {
  if (!fs.existsSync(path.join(process.cwd(), '.vert'))) {
    fs.mkdirSync(path.join(process.cwd(), '.vert'));
  }

  if (fs.existsSync(path.join(process.cwd(), '.vert/uploads'))) {
    fs.rmdirSync(path.join(process.cwd(), '.vert/uploads'), { recursive: true });
  }

  fs.mkdirSync(path.join(process.cwd(), '.vert/uploads'));
};

export { preSetup };
