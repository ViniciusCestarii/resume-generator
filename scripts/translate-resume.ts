import { enResumeData } from "../src/types/en-resume-data";

(async () => {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY environment variable is required');
  }

  if (!process.env.MODEL) {
    throw new Error('MODEL environment variable is required');
  }

  const userPrompt = `Create the pt JSON translating the following JSON. Say in the first person, ex: Desenvolvi. Don't translate tech words, ex: Soft Skills = Soft Skills. Output only the JSON.

${JSON.stringify(enResumeData)}`;

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
    console.log(JSON.stringify(results, null, 2));

    const responseText = results.choices[0].message.content;
    console.log(responseText);
  } catch (error) {
    console.error('Error occurred:', error);
    throw error;
  }
})();