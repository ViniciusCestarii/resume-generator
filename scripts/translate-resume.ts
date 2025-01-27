import { enResumeData } from "../src/types/en-resume-data"

if (!process.env.GROQ_API_KEY) {
  throw new Error('OPENAI_API_KEY is required to run this script')
}

if (!process.env.MODEL) {
  throw new Error('MODEL is required to run this script')
}

const userPrompt = `create the pt JSON tranlating the following JSON. Say in the first person, ex: Desenvolvi. Don't tranlate tech words, ex: Soft Skills = Soft Skills. Output only the JSON.

${JSON.stringify(enResumeData)}
  `
const apiEndpoint = 'https://api.groq.com/openai/v1/chat/completions'

const headers = {
  'Authorization': `Bearer ${ process.env.GROQ_API_KEY }`,
  'Content-Type': 'application/json'
}

const data = {
  messages: [
    {
      role: "user",
      content: userPrompt,
    },
  ],
  model: process.env.MODEL,
}

fetch(apiEndpoint, {
  method: 'POST',
  headers,
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(results => {
    console.log(JSON.stringify(results, null, 2))

    const responseText = results.choices[0].message.content

    console.log(responseText)
  })
  .catch(error => {
    console.error('Error:', error)
  })