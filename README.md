# Portfolio Website

This is a modern portfolio website built using React. The website showcases various projects, skills, and provides a contact form for inquiries.

## Project Structure

The project is organized as follows:

```
portfolio-website
├── src
│   ├── assets
│   │   ├── fonts          # Custom font files
│   │   ├── images         # Image files used in the project
│   │   └── icons          # Icon files used in the project
│   ├── components
│   │   ├── header         # Header components
│   │   │   ├── Header.js  # Displays the website's title and logo
│   │   │   └── Navigation.js # Contains the navigation links
│   │   ├── hero           # Hero component
│   │   │   └── Hero.js    # Displays the main introduction section
│   │   ├── about          # About component
│   │   │   └── About.js    # Provides information about the individual
│   │   ├── projects       # Components related to projects
│   │   │   ├── ProjectCard.js # Displays individual project details
│   │   │   └── ProjectsGrid.js # Arranges multiple ProjectCard components in a grid layout
│   │   ├── skills         # Skills component
│   │   │   └── Skills.js   # Showcases the individual's skills
│   │   ├── contact        # Contact form component
│   │   │   └── ContactForm.js # Allows users to send messages
│   │   └── footer         # Footer component
│   │       └── Footer.js   # Contains copyright and additional links
│   ├── styles
│   │   ├── global.css     # Global styles applied throughout the website
│   │   └── variables.css   # CSS variables for consistent styling
│   ├── utils
│   │   ├── animations.js   # Functions related to animations used in the project
│   │   └── helpers.js      # Helper functions for various tasks
│   ├── data
│   │   ├── projects.js     # Array of project objects used in the ProjectsGrid component
│   │   └── skills.js       # Array of skill objects used in the Skills component
│   ├── pages
│   │   ├── index.js        # Main page component, renders the entire portfolio
│   │   └── project
│   │       └── [id].js     # Dynamic page component for specific project details
│   └── app.js              # Main entry point of the application
├── public
│   ├── favicon.ico         # Favicon for the website
│   └── robots.txt          # Instructions for web crawlers
├── .gitignore              # Specifies files and directories to ignore by Git
├── package.json            # Configuration file for npm, lists dependencies and scripts
└── README.md               # Documentation for the project
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Technologies Used

- React
- Tailwind CSS
- JavaScript
- HTML
- CSS

## License

This project is licensed under the MIT License.