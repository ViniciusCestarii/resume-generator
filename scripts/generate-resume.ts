import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { LANGS } from './langs';

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

    for (const lang in LANGS) {
      const dirWithLang = path.join(dir, lang);

      if (!fs.existsSync(dirWithLang)) {
        fs.mkdirSync(dirWithLang, { recursive: true });
      }
    }

    const generateResume = async (fileName: string, lang: string) => {
      const dirWithLang = path.join(dir, lang);
      const jpegPath = path.join(dirWithLang, `${fileName}.jpeg`);
      const pdfPath = path.join(dirWithLang, `${fileName}.pdf`);

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

    for (const lang in LANGS) {
      await page.goto(url + `/${lang}`, { waitUntil: 'networkidle0' })
      const fileName = `${process.env.FULLNAME} - ${LANGS[lang].resume}`;
      await generateResume(fileName, lang);
    }
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  } finally {
    await browser.close();
  }
})();