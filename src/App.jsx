import "./app.scss"
import DateTimeWidget from "./components/DateTimeWidget"
import Dock from "./components/Dock"
import Github from "./components/window/Github"
import Note from "./components/window/Note"
import Resume from "./components/window/Resume"
import Spotify from "./components/window/Spotify"
import Cli from "./components/window/Cli"
import { useState } from "react"

function App() {
  const [windows, setWindows] = useState({
    github: { open: true, minimized: false, maximized: false },
    note: { open: true, minimized: false, maximized: false },
    resume: { open: true, minimized: false, maximized: false },
    spotify: { open: true, minimized: false, maximized: false },
    cli: { open: true, minimized: false, maximized: false },
  })

  return (
    <main className="desktop-root">
      <DateTimeWidget />
      <Dock windows={windows} setWindows={setWindows} />

      {windows.github.open && (
        <Github state={windows.github} setWindows={setWindows} />
      )}
      {windows.note.open && (
        <Note state={windows.note} setWindows={setWindows} />
      )}
      {windows.resume.open && (
        <Resume state={windows.resume} setWindows={setWindows} />
      )}
      {windows.spotify.open && (
        <Spotify state={windows.spotify} setWindows={setWindows} />
      )}
      {windows.cli.open && (
        <Cli state={windows.cli} setWindows={setWindows} />
      )}
    </main>
  )
}

export default App
