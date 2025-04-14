# Bruno's Portfolio

Welcome to **Bruno's Portfolio**—a modern, innovative personal portfolio developed with Vue 3 and Vite, designed to showcase my technical skills and projects as a developer. This portfolio is presented as a real-world technical documentation site, giving visitors a unique experience that mimics the look and feel of professional web documentation.

## Overview

**Bruno's Portfolio** serves as an online resume and project showcase for Bruno Silva. Designed as if it were a tech documentation website, the portfolio details my professional experience, technical skills, and diverse projects. Each section is presented with clarity and precision, reinforcing my commitment to quality and innovation.

## Features

- **Tech Documentation Style:**  
  The portfolio is styled and structured like technical documentation, providing detailed insights into my work experience, skills, and projects.

- **Responsive Design:**  
  Built with Tailwind CSS and DaisyUI, the layout is fully responsive—from mobile devices to large desktop screens. Navigation adapts using drawer menus for mobile and a full navbar for larger screens.

- **Dynamic Content:**  
  Projects and work experiences are rendered dynamically from data structures. This allows easy updates and additions without repeating markup.

- **Internationalisation (i18n):**  
  The application uses Vue I18n to handle translations and localisation. It detects the user’s locale on startup and defaults to English if no match is found.

- **Interactive Elements:**  
  Includes interactive components like a live preview (via iframes or images), for project descriptions.

- **Tech Stats and GitHub Integration:**  
  The site also integrates GitHub stats and other dynamic data to display professional metrics, reinforcing my technical background.

- **Modern Build System:**  
  The project is set up using Yarn and Vite for fast development, hot module replacement, and an optimized production build. TypeScript is used throughout for strong typing and improved developer experience.

## Technologies Used

- **Vue 3** – The progressive JavaScript framework for building user interfaces.
- **Vite** – A modern build tool that offers fast bundling and hot reloading.
- **TypeScript** – For static type checking and better development experience.
- **Tailwind CSS & DaisyUI** – Utility-first CSS framework and component library for rapid UI development.
- **Vue I18n** – For internationalization and localization of the application.
- **GitHub API Integration** – (Optional) For fetching live stats and project metrics.
- **Yarn** – As the package manager for dependency management.
- **ESLint & Prettier** – For code linting and formatting, ensuring high-quality code.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher)
- [Yarn](https://yarnpkg.com/)
- A modern browser (Chrome, Firefox, Safari, etc.)

### Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/Brunosil97/bruno-portfolio.git

cd bruno-portfolio
```

### Development
Start the development server with hot reloading:

```sh
yarn dev
```
This command opens your portfolio in development mode. Make changes to the code and see the updates immediately in the browser.

### Build for Production
Compile and minify the project for production:

```sh
yarn build
```
### Linting

Run ESLint to check for code quality and formatting issues:

```sh
yarn lint
```

### Project Structure
 - src/: Contains the main Vue components, assets, and styles.

 - public/: Static assets like PDFs, images, and other files that are directly served.

 - vite.config.ts: The Vite configuration file.

 - tsconfig.json: TypeScript configuration.

### Customisation

You can customise various parts of the portfolio, including themes, translations, and the content for your work experience and projects. The dynamic nature of the project structure allows you to add or modify content easily via JSON-like data or directly within Vue components.

### Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements for the portfolio. Your feedback is highly appreciated.

### License
This project is licensed under the MIT License.

