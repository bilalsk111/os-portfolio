import React from "react";
import Window from "./Window";
import "./Resume.scss";

const Resume = ({ windowsState, setWindowsState, windowName }) => {
  return (
    <Window title="Resume"  windowName={windowName}
      windowsState={windowsState}
      setWindowsState={setWindowsState}>
      <div className="resume-container">
        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          className="resume-frame"
        />
      </div>
    </Window>
  );
};

export default Resume;
