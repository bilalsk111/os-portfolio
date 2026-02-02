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
 const [windowsState, setWindowsState] = useState({
    github: { open: false, minimized: false, maximized: false, z: 1 },
    note: { open: false, minimized: false, maximized: false, z: 1 },
    resume: { open: false, minimized: false, maximized: false, z: 1 },
    spotify: { open: false, minimized: false, maximized: false, z: 1 },
    cli: { open: false, minimized: false, maximized: false, z: 1 },
  })

  return (
    <main className="desktop-root">
      <DateTimeWidget />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />

      {windowsState.github.open && (
        <Github windowName="github" windowsState={windowsState} setWindowsState={setWindowsState} />
      )}

      {windowsState.note.open && (
        <Note windowName="note" windowsState={windowsState} setWindowsState={setWindowsState} />
      )}

      {windowsState.resume.open && (
        <Resume windowName="resume" windowsState={windowsState} setWindowsState={setWindowsState} />
      )}

      {windowsState.spotify.open && (
        <Spotify windowName="spotify" windowsState={windowsState} setWindowsState={setWindowsState} />
      )}

      {windowsState.cli.open && (
        <Cli windowName="cli" windowsState={windowsState} setWindowsState={setWindowsState} />
      )}
    </main>
  )
}


export default App
