import React from "react";
import Window from "./Window";
import "./Resume.scss";

const Resume = ({ state, setWindows }) => {
  return (
    <Window title="Resume" state={state}
      setWindows={setWindows}>
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
