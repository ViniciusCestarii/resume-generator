import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

(async () => {
  if (!process.env.FULLNAME) {
    throw new Error('FULLNAME environment variable is required');
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });

    const dir = path.join(__dirname, '../resumes/pdf');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const fileName = `${process.env.FULLNAME} Resume.pdf`;
    const pdfPath = path.join(dir, fileName);

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    });

    console.log(`PDF saved to: ${pdfPath}`);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  } finally {
    await browser.close();
  }
})();