import React from "react"
import githubData from "../../assets/github.json"
import Window from "./Window"
import GitCard from "./GitCard"
import "./github.scss"

const Github = ({ state, setWindows }) => {
  return (
    <Window title="GitHub" state={state}
      setWindows={setWindows}>
      <div className="cards">
        {githubData.map(project => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </Window>
  )
}

export default Github
