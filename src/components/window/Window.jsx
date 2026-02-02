import { Rnd } from "react-rnd"
import "./window.scss"

const Window = ({
  id,
  title,
  children,
  state,
  setWindows,
}) => {
  if (state.minimized) return null

  const close = () => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], open: false }
    }))
  }

  const minimize = () => {
    setWindows(prev => ({
      ...prev,
      [id]: { ...prev[id], minimized: true }
    }))
  }

  const maximize = () => {
    setWindows(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        maximized: !prev[id].maximized
      }
    }))
  }

  return (
    <Rnd
      size={
        state.maximized
          ? { width: "100vw", height: "100vh" }
          : { width: "42vw", height: "60vh" }
      }
      position={
        state.maximized ? { x: 0, y: 0 } : undefined
      }
      minWidth={320}
      minHeight={200}
      bounds="window"
      dragHandleClassName="titlebar"
      disableDragging={state.maximized}
      enableResizing={!state.maximized}
    >
      <div className="window">
        <div className="titlebar">
          <h5>{title}</h5>

          <div className="window-controls">
            <button onClick={minimize}>
              <i className="ri-subtract-line" />
            </button>
            <button onClick={maximize}>
              <i className="ri-rectangle-line" />
            </button>
            <button onClick={close}>
              <i className="ri-close-fill" />
            </button>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Window
