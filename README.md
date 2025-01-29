
# Resume Generator

A web application for generating and translating resumes, built with **Vite**, **React**, **Tailwind CSS**, and **Puppeteer**. This app allows you to create resumes in both **PDF** and **JPEG** 
formats and supports translation of resume content using the **Groq API**.

With multiple **templates** available, you can generate resumes in different styles, allowing you to experiment and choose the design that best reflects your personality and professional identity.

<table>
  <thead>
    <tr>
      <th align="center">classic</th>
      <th align="center">bold</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://github.com/ViniciusCestarii/resume-generator/blob/main/resumes/en/classic/Vinicius%20Cestari%20-%20Resume.jpeg?" title="Classic" />
      </td>
      <td align="center">
        <img src="https://github.com/ViniciusCestarii/resume-generator/blob/main/resumes/en/bold/Vinicius%20Cestari%20-%20Resume.jpeg?" title="Bold" />
      </td>
    </tr>
    <thead>
      <tr>
        <th align="center">rose</th>
        <th align="center">rose-sky</th>
      </tr>
    </thead>
    <tr>
      <td align="center">
        <img src="https://github.com/ViniciusCestarii/resume-generator/blob/main/resumes/en/rose/Vinicius%20Cestari%20-%20Resume.jpeg?" title="rose" />
      </td>
      <td align="center">
        <img src="https://github.com/ViniciusCestarii/resume-generator/blob/main/resumes/en/rose-sky/Vinicius%20Cestari%20-%20Resume.jpeg?" title="rose-sky" />
      </td>
    </tr>
    <thead>
      <tr>
        <th align="center">rose-lime</th>
        <th align="center">Build Your Own!</th>
      </tr>
    </thead>
    <tr>
      <td align="center">
        <img src="https://github.com/ViniciusCestarii/resume-generator/blob/main/resumes/en/rose-lime/Vinicius%20Cestari%20-%20Resume.jpeg?" title="rose-lime" />
      </td>
      <td align="center">
        Follow this README and build your own amazing resume!
      </td>
    </tr>
  </tbody>
</table>


## Features

- **Resume Generation**: Generate resumes in PDF and JPEG formats.
- **Translation**: Translate resume content from English to Portuguese, Espanish, French using the Groq API.
- **Templates**: Leverage the same data to generate multiple styled resumes and discover which design suits you best.
- **Tailwind CSS**: Styled with Tailwind CSS for a modern and responsive design.
- **Puppeteer**: Uses Puppeteer for headless browser automation to generate PDFs and screenshots.
- **Simple Configuration**: Configure the resume content and styles using only a object.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (for ts file execution)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone or Fork the Repository

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
PRINT_PORT=5173 # for development and 4173 for builded project
```

### 4. Run the Development Server

```bash
npm run dev
# or
bun dev
```

## Usage

### Update Resume Content

To update the resume content, open the `src/data/en-resume.ts` file and modify the data as needed and save.

### Generate Resume

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173` to visualize the resume.
   - To visualize your resume on other language: `http://localhost:5173/pt` | `http://localhost:5173/es` ...
   - To viusalize your resume on other template: `http://localhost:5173/en/bold` | `http://localhost:5173/en/classic` ...

4. Generate the resume in PDF and JPEG formats:

```bash
npm run generate
# or
bun run generate
```

The generated files will be saved in the `resumes` directory.

### Translate Resume

To translate the resume content from English to Portuguese, Espanish, French run:

```bash
npm run translate
# or
bun run translate
```

This will use the Groq API to translate the resume JSON data and output the translated content.  

## Technologies Used

- **Vite**: Fast build tool for modern web apps.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Puppeteer**: Node.js library for controlling headless Chrome/Chromium.
- **Groq API**: API for translating resume content.
- **TypeScript**: Typed superset of JavaScript for better development.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](https://github.com/ViniciusCestarii/resume-generator/blob/main/LICENSE). See the LICENSE file for details.

## Acknowledgments

- [**Vite**](https://vite.dev/) for the blazing-fast development experience.
- [**Tailwind CSS**](https://tailwindcss.com/) for the utility-first CSS framework.
- [**Puppeteer**](https://pptr.dev/) for headless browser automation.
- [**Groq**](https://groq.com/) for the translation API.

## Support

If you encounter any issues or have questions, please open an issue.
