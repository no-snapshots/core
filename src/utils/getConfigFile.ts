import fs from 'fs';
import path from 'path';

interface ConfigFileOptions {
    include: string;
}

const getConfigFile = () => path.join(process.cwd(), 'vert.config.js');

export { getConfigFile };