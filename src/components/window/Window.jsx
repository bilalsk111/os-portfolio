import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  title,
  children,
  windowName,
  windowsState,
  setWindowsState,
  width = "40vw",
  height = "40vh",
}) => {
  const state = windowsState[windowName];

  if (!state || !state.open || state.minimized) return null;

  const close = () => {
    setWindowsState((prev) => ({
      ...prev,
      [windowName]: { ...prev[windowName], open: false, minimized: false },
    }));
  };

  const minimize = () => {
    setWindowsState((prev) => ({
      ...prev,
      [windowName]: { ...prev[windowName], minimized: true },
    }));
  };

  const toggleMaximize = () => {
    setWindowsState((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        maximized: !prev[windowName].maximized,
      },
    }));
  };

  return (
    <Rnd
      bounds="parent" 
      default={{ width, height, x: 200, y: 150 }}
      size={state.maximized ? { width: "100vw", height: "92vh" } : undefined} 
      position={state.maximized ? { x: 0, y: 0 } : undefined}
      disableDragging={state.maximized}
      enableResizing={!state.maximized}
      style={{ zIndex: state.active ? 100 : 1 }} // Active window upar dikhegi
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
