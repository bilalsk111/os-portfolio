import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  title,
  children,
  windowName,
  windowsState,
  setWindowsState,
}) => {
  const state = windowsState[windowName]
  if (!state.open || state.minimized) return null

  const bringToFront = () => {
    setWindowsState(prev => {
      const maxZ = Math.max(...Object.values(prev).map(w => w.z))
      return {
        ...prev,
        [windowName]: { ...prev[windowName], z: maxZ + 1 }
      }
    })
  }

  const close = () =>
    setWindowsState(prev => ({
      ...prev,
      [windowName]: { ...prev[windowName], open: false, minimized: false }
    }))

  const minimize = () =>
    setWindowsState(prev => ({
      ...prev,
      [windowName]: { ...prev[windowName], minimized: true }
    }))

  const toggleMaximize = () =>
    setWindowsState(prev => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        maximized: !prev[windowName].maximized
      }
    }))

  return (
    <Rnd
      bounds="parent"
      onMouseDown={bringToFront}
      size={state.maximized ? { width: "100vw", height: "92vh" } : undefined}
      position={state.maximized ? { x: 0, y: 0 } : undefined}
      disableDragging={state.maximized}
      enableResizing={!state.maximized}
      style={{ zIndex: state.z }}
      default={{ width: "40vw", height: "40vh", x: 200, y: 120 }}
    >
      <div className="window shadow-lg">
        <div className="titlebar" onDoubleClick={toggleMaximize}>
          <h5>{title}</h5>
          <div className="window-controls">
            <button className="icon" onClick={minimize}>
              <i className="ri-subtract-line" />
            </button>
            <button className="icon" onClick={toggleMaximize}>
              <i className="ri-rectangle-line" />
            </button>
            <button className="icon" onClick={close}>
              {" "}
              <i className="ri-close-fill" />
            </button>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
