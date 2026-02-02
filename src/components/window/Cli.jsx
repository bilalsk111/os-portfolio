import React, { useMemo } from 'react'
import Window from './Window'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({ state, setWindows }) => {

  const commands = useMemo(() => ({
    help: {
      description: 'Show available commands',
      usage: 'help',
      fn: () => `
Available commands:

  about        Display information about me
  skills       List my technical skills
  projects     Show selected projects
  experience   View experience summary
  contact      Get contact details
  github       Open GitHub profile
  echo         Echo input text
  clear        Clear the terminal
  help         Show this help message

Usage:
  <command> [arguments]

Example:
  echo Hello World
`
    },

    about: {
      description: 'About me',
      usage: 'about',
      fn: () => `
Bilal Shaikh
Frontend Developer | React & Modern UI

I focus on building clean, interactive, and
performance-focused frontend applications
using React, JavaScript, and modern CSS.

GitHub:
https://github.com/bilalsk111
`
    },

    skills: {
      description: 'List technical skills',
      usage: 'skills',
      fn: () => `
Frontend:
- React
- JavaScript (ES6+)
- HTML / CSS / SCSS
- Tailwind CSS
- GSAP / Framer Motion
- Three.js (basic)

Tools:
- Git & GitHub
- Vite
- Webpack
`
    },

    projects: {
      description: 'View projects',
      usage: 'projects',
      fn: () => `
Highlighted Projects:

1. Portfolio Website (React + Vite)
2. Animation-heavy UI (Obys / Refokus inspired)
3. Movie App (API based)

Type 'github' to see source code.
`
    },

    experience: {
      description: 'Experience summary',
      usage: 'experience',
      fn: () => `
Frontend Developer (Self-driven)

- Building real-world React projects
- Strong focus on UI & animations
- Component-based architecture
- Actively learning by building
`
    },

    contact: {
      description: 'Contact information',
      usage: 'contact',
      fn: () => `
Email: bilal@example.com
GitHub: https://github.com/bilalsk111
`
    },

    github: {
      description: 'Open GitHub profile',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/bilalsk111', '_blank')
        return 'Opening GitHub profile...'
      }
    },

    echo: {
      description: 'Echo input',
      usage: 'echo <text>',
      fn: (...args) => args.join(' ')
    },

    clear: {
      description: 'Clear terminal',
      usage: 'clear',
      fn: () => ''
    }
  }), [])

  const welcomeMessage = `
bilal@portfolio:~$ init

Welcome to my CLI portfolio.
This terminal behaves like a Linux shell.

Type 'help' to get started.
`

  return (
    <Window state={state}
      setWindows={setWindows}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel="bilal@portfolio:~$"
          autoFocus
          noDefaults
          contentStyle={{ color: '#dcdcdc' }}      // OUTPUT TEXT COLOR
          promptLabelStyle={{ color: '#4fc1ff' }}  // PROMPT COLOR
          inputStyle={{ color: '#ffffff' }}        // INPUT COLOR
        />
      </div>
    </Window>
  )
}

export default Cli
