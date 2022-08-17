import path from 'path';

interface ConfigFileOptions {
  include: string;
  service: string;
}

const getConfigFile = (): ConfigFileOptions => {
  return require(path.join(process.cwd(), '.vert', 'vert.config.js'));
};

export { getConfigFile };
