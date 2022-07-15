import fetch from 'node-fetch';


const waitForTestCompletion = async (reviewServerUrl: string) => {
  return new Promise((resolve) => {
    const pingServer = async () => {
      const { status } = await fetch(`${reviewServerUrl}/status`, {
        method: 'get',
      })

      if (status === 200) {
        setTimeout(() => {
          pingServer();
        }, 1000);

        return;
      }


      resolve(true);
    }

    pingServer();
  });
}

export { waitForTestCompletion };
