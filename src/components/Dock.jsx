import React from "react";
import "./dock.scss";

const Dock = ({  windows, setWindows }) => {
      const openWindow = (key) => {
    setWindows(prev => ({
      ...prev,
      [key]: { ...prev[key], open: true, minimized: false }
    }))
  }
  return (
    <footer className="dock">
      <div className="icon wind">
        <img src="/doc-icons/windows.svg" alt="" />
      </div>
      <div onClick={() => openWindow("github")} className="icon github">
        <img src="/doc-icons/github.svg" />
      </div>
      <div onClick={() => openWindow("note")} className="icon note">
        <img src="/doc-icons/note.svg" />
      </div>
      <div onClick={() => openWindow("resume")} className="icon resume">
        <img src="/doc-icons/pdf.svg" />
      </div>
      <div onClick={() => openWindow("spotify")} className="icon spotify">
        <img src="/doc-icons/spotify.svg" />
      </div>
      <div onClick={() => openWindow("cli")} className="icon cli">
        <img src="/doc-icons/cli.svg" />
      </div>
      <div className="icon mail">
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div className="icon link">
        <img src="/doc-icons/link.svg" alt="" />
      </div>
      {/* <div className="icon cli">
        <img src="/doc-icons/cli.svg" alt="" />
      </div> */}
    </footer>
  );
};

export default Dock;
