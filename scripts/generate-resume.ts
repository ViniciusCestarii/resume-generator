import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { LANGS, RESUME_STYLES } from './resume-configs';

const traverseConfigs = async (func: ({
  lang,
  style
}: {
  lang: string;
  style: string;
}) => Promise<void>) => {
  for (const lang in LANGS) {
    for (const style in RESUME_STYLES) {
      await func({
        lang,
        style
      });
    }
  }
}

(async () => {
  if (!process.env.FULLNAME) {
    throw new Error('FULLNAME environment variable is required');
  }

  if (!process.env.PRINT_PORT) {
    throw new Error('PRINT_PORT environment variable is required');
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    const url = `http://localhost:${process.env.PRINT_PORT}`;

    const dir = path.join(__dirname, '../resumes');

    await traverseConfigs(async ({ lang, style }) => {
      const dirWithLangStyle = path.join(dir, lang, style);

      if (!fs.existsSync(dirWithLangStyle)) {
        await fs.promises.mkdir(dirWithLangStyle, { recursive: true });
      }
    })

    const generateResume = async (fileName: string, lang: string, style: string) => {
      const dirWithLangStyle = path.join(dir, lang, style);
      const jpegPath = path.join(dirWithLangStyle, `${fileName}.jpeg`);
      const pdfPath = path.join(dirWithLangStyle, `${fileName}.pdf`);

      await page.screenshot({
        path: jpegPath,
        type: 'jpeg',
        quality: 90,
        fullPage: true,
      });

      console.log(`JPEG saved to: ${jpegPath}`);

      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '12.5mm', bottom: '12.5mm', left: '12.5mm', right: '12.5mm' },
      });

      console.log(`PDF saved to: ${pdfPath}`);
    }

    await traverseConfigs(async ({ lang, style }) => {
        await page.goto(url + `/${lang}/${style}`, { waitUntil: 'networkidle0' })
        const fileName = `${process.env.FULLNAME} - ${LANGS[lang].resume}`;
        await generateResume(fileName, lang, style);
    })
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  } finally {
    await browser.close();
  }
})();