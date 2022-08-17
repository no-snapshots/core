import fs from 'fs';
import path from 'path';

const preSetup = () => {
  if (!fs.existsSync(path.join(process.cwd(), '.vert'))) {
    // tslint:disable-next-line:no-console
    console.log('Please create a .vert directory')

    process.exit(1);
  }

  if (fs.existsSync(path.join(process.cwd(), '.vert/tmp'))) {
    fs.rmSync(path.join(process.cwd(), '.vert/tmp'), { recursive: true });
  }

  fs.mkdirSync(path.join(process.cwd(), '.vert/tmp'));
  fs.mkdirSync(path.join(process.cwd(), '.vert/tmp/uploads'));
  fs.mkdirSync(path.join(process.cwd(), '.vert/tmp/builds'));
};

export { preSetup };
