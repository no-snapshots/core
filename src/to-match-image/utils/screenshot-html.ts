import puppeteer from 'puppeteer';

const screenshotHTML = async (html: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);

  await page.screenshot({ path: 'example.png' });

  await browser.close();
}

export { screenshotHTML };
