
# Web App Resume Generator

A web application for generating and translating resumes, built with **Vite**, **React**, **Tailwind CSS**, and **Puppeteer**. This app allows you to create resumes in both **PDF** and **JPEG** 
formats and supports translation of resume content using the **Groq API**.

---

## Features

- **Resume Generation**: Generate resumes in PDF and JPEG formats.
- **Translation**: Translate resume content from English to Portuguese (or other languages) using the Groq API.
- **Tailwind CSS**: Styled with Tailwind CSS for a modern and responsive design.
- **Puppeteer**: Uses Puppeteer for headless browser automation to generate PDFs and screenshots.- **Environment Variables**: Configure API keys and other settings via environment variables.    

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (for ts file execution)
- [Git](https://git-scm.com/)

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resume-generator.git
cd resume-generator
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
GROQ_API_KEY=your_groq_api_key_here
MODEL=groq_model_name_here
FULLNAME=Your_Full_Name
PRINT_PORT=5173 # for development and 4173 for builded project
```

### 4. Run the Development Server

```bash
npm run dev
# or
bun dev
```

---

## Usage

### Generate Resume

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

3. Generate the resume in PDF and JPEG formats:

```bash
npm run generate
# or
bun run generate
```

The generated files will be saved in the `resumes` directory.

### Translate Resume

To translate the resume content from English to Portuguese (or another language), run:

```bash
npm run translate
# or
bun run translate
```

This will use the Groq API to translate the resume JSON data and output the translated content.  

---

## Technologies Used

- **Vite**: Fast build tool for modern web apps.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Puppeteer**: Node.js library for controlling headless Chrome/Chromium.
- **Groq API**: API for translating resume content.
- **TypeScript**: Typed superset of JavaScript for better development.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments

- **Vite** for the blazing-fast development experience.
- **Tailwind CSS** for the utility-first CSS framework.
- **Puppeteer** for headless browser automation.
- **Groq** for the translation API.

---

## Support

If you encounter any issues or have questions, please open an issue.

---
