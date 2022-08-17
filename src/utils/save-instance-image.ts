import puppeteer from 'puppeteer';

const saveInstanceImage = async (html: string, componentName: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);

  await page.screenshot({ path: `.vert/uploads/${componentName}.png` });

  await browser.close();
};

export { saveInstanceImage };
