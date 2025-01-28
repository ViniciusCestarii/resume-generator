import path from "path";
import fs from "fs";

const DATA_RESUME_DIR = path.join(__dirname, '../src/data');

(async () => {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is required');
  }

  if (!process.env.MODEL) {
    throw new Error('MODEL environment variable is required');
  }

  const enPath = path.join(DATA_RESUME_DIR, 'en-resume.ts');

  const enFile = await fs.promises.readFile(enPath, 'utf-8');

  const userPrompt = `Create the ptResumeData. Say in the first person, ex: Desenvolvi. Don't translate tech words, ex: Soft Skills = Soft Skills. Output it as JSON. Import the import { ResumeData } from "./resume";.

${enFile}`;

  const apiEndpoint = 'https://api.groq.com/openai/v1/chat/completions';

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
    const response = await fetch(apiEndpoint, {
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

    const ptPath = path.join(DATA_RESUME_DIR, 'pt-resume.ts');

    await fs.promises.writeFile(ptPath, cleanedResponse);

    console.log(`pt-resume.ts created/updated successfully path: ${ptPath}`);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
})();