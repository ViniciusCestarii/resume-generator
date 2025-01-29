import path from "path";
import fs from "fs";
import { LANGS } from "./resume-configs";

const GROQ_API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

const tranlateFile = async (userPrompt: string) => {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is required');
  }

  if (!process.env.MODEL) {
    throw new Error('MODEL environment variable is required');
  }

  const headers = {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json',
  };

  const data = {
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: process.env.MODEL,
  };

  try {
    const response = await fetch(GROQ_API_ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const results = await response.json();

    const responseText = results.choices[0].message.content;

    const topCleanedResponse = responseText.split("```json\n")[1];

    const cleanedResponse = topCleanedResponse.trimEnd().slice(0, -3);

    return cleanedResponse;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
}

const DATA_RESUME_DIR = path.join(__dirname, '../src/data');

(async () => {

  const enPath = path.join(DATA_RESUME_DIR, 'en-resume.ts');

  const enFile = await fs.promises.readFile(enPath, 'utf-8');

  for (const lang in LANGS) {

  if (lang === 'en') {
    continue;
  }

  const userPrompt = `${LANGS[lang].translationPrompt}\n

${enFile}`;

  const tranlatedResponse = await tranlateFile(userPrompt);

  const fileName = `${lang}-resume.ts`;
  const ptPath = path.join(DATA_RESUME_DIR, fileName);

  await fs.promises.writeFile(ptPath, tranlatedResponse);

  console.log(`${fileName} created/updated successfully path: ${ptPath}`);
  }
})();