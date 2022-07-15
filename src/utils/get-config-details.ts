import fs from 'fs';
import * as path from 'path';

export type NoSnapshotRCConfig = {
  server: string;
  project: string;
}

const getConfigDetails = (): NoSnapshotRCConfig => {
  const serverConfig = fs.readFileSync(path.join(__dirname, '..', '..', '.nosnapshotrc'), 'utf-8');

  return JSON.parse(serverConfig) as NoSnapshotRCConfig;
}

export { getConfigDetails }
