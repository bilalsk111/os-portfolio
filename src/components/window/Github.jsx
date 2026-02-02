import React from "react"
import githubData from "../../assets/github.json"
import Window from "./Window"
import GitCard from "./GitCard"
import "./github.scss"

const Github = ({ windowsState, setWindowsState, windowName }) => {
  return (
    <Window
      title="GitHub"
      windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}
    >
      <div className="cards">
        {githubData.map(project => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </Window>
  )
}


export default Github
