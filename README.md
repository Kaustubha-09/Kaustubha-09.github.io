# Kaustubha Venkata Eluri - Portfolio Website

A modern, responsive portfolio website showcasing my work as an **Agentic AI Engineer**, **Software Engineer**, and **Accessibility Advocate**. Built with React and deployed on GitHub Pages.

🌐 **Live Site:** [kaustubha-09.github.io](https://kaustubha-09.github.io/)

## About

This portfolio highlights my experience building production-grade, human-centered systems across AI/ML, accessibility, mobile, and full-stack engineering. It features my work at Smith-Kettlewell Eye Research Institute, Evenness Inc., Northeastern University, and various projects in generative AI, machine learning, and accessibility.

## Tech Stack

- **Frontend:** React 19, React Router DOM
- **Styling:** CSS Modules
- **Build Tool:** Vite
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Data Management:** JSON-based content structure

## Project Structure

This project follows a modular architecture inspired by [AVS1508.github.io](https://github.com/AVS1508/AVS1508.github.io):

```
src/
├── assets/              # Images and media files
│   ├── organizations/   # Company/organization logos
│   ├── personal/        # Personal photos
│   └── projects/        # Project screenshots
├── components/          # Reusable UI components
│   ├── AchievementCard/
│   ├── ExperienceCard/
│   ├── NavigationBar/
│   ├── ProfileCard/
│   └── ProjectCard/
├── data/                # JSON data files
│   ├── Achievements.json
│   ├── Experience.json
│   ├── Involvements.json
│   ├── Projects.json
│   └── Skills.json
├── pages/               # Page components (React Router)
│   ├── Achievements/
│   ├── Contact/
│   ├── Experience/
│   ├── Home/
│   ├── Involvements/
│   ├── NotFound/
│   ├── Projects/
│   └── Skills/
└── App.jsx              # Main app component with routing
```

## Features

- ✅ **Tab-based Navigation** - Smooth routing with React Router
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Theme** - Modern, accessible color scheme
- ✅ **CSS Modules** - Scoped styling for components
- ✅ **JSON Data Management** - Easy content updates
- ✅ **Modular Architecture** - Reusable, maintainable components
- ✅ **Accessibility** - WCAG compliant design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kaustubha-09/Kaustubha-09.github.io.git
cd Kaustubha-09.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch. The build output is generated in the `dist` folder.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files that GitHub Pages serves.

## Sections

- **Home** - Introduction and profile overview
- **Experience** - Professional work history
- **Projects** - Technical projects and research
- **Skills** - Technical skills and competencies
- **Achievements** - Awards, certifications, and recognitions
- **Leadership** - Leadership roles and involvements
- **Contact** - Get in touch

## Contact

- 📧 **Email:** [kaustubha.ev@gmail.com](mailto:kaustubha.ev@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/kaustubha-ve/](https://linkedin.com/in/kaustubha-ve/)
- 💻 **GitHub:** [github.com/Kaustubha-09](https://github.com/Kaustubha-09)
- 📍 **Location:** Silicon Valley, CA

## License

This project is open source and available under the MIT License.
