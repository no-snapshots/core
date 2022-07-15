import type { Reporter } from '@jest/reporters'
import { submitTestToServer } from './utils/submit-test-to-server';
import { getTestContents } from './utils/get-test-content';
import { cleanupTest } from './utils/cleanup-test';
import { waitForTestCompletion } from './utils/wait-for-test-completion';

const logger = console.log;

let instanceCleanupUrl: string | undefined;

class Analyzer implements Partial<Reporter> {
  async onRunComplete(): Promise<void> {
    const testContents = getTestContents();
    const { pass, instanceReviewUrl } = await submitTestToServer(testContents);

    if (pass) {
      logger('Your image tests have passed!');

      return;
    }

    instanceCleanupUrl = instanceReviewUrl;

    logger('===========================');
    logger('We have detected changes in your components');
    logger('===========================');
    logger(`Please review them here\n${instanceReviewUrl}`)

    await waitForTestCompletion(instanceReviewUrl!);

    logger('===========================');
    logger('Your tests are over');
    logger('===========================');

    instanceCleanupUrl = undefined;
  }
}

process.on('exit', () => {
  if (instanceCleanupUrl) {
    cleanupTest(instanceCleanupUrl);
  }
});

export default Analyzer;
