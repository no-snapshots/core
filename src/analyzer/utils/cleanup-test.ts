import fetch from 'node-fetch';

const cleanupTest = (instanceCleanupUrl: string) => {
  try {
    fetch(instanceCleanupUrl, {
      method: 'DELETE',
    });
  } catch (e) {
    const error = new Error(`Cleaning up test failed, you may need to delete it by visiting ${instanceCleanupUrl}`)

    error.stack = JSON.stringify(e);

    throw error;
  }
}

export { cleanupTest };
