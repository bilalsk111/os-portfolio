import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  const handleClick = (name) => {
    setWindowsState((prev) => {
      const win = prev[name];

      if (!win.open) {
        return {
          ...prev,
          [name]: { open: true, minimized: false, maximized: false },
        };
      }

      if (win.minimized) {
        return {
          ...prev,
          [name]: { ...win, minimized: false },
        };
      }

      return {
        ...prev,
        [name]: { ...win, minimized: true },
      };
    });
  };

  return (
    <footer className="dock">
      <div className="icon github" onClick={() => handleClick("github")}>
        <img src="/doc-icons/github.svg" />
      </div>
      <div className="icon note" onClick={() => handleClick("note")}>
        <img src="/doc-icons/note.svg" />
      </div>
      <div className="icon resume" onClick={() => handleClick("resume")}>
        <img src="/doc-icons/pdf.svg" />
      </div>
      <div className="icon spotify" onClick={() => handleClick("spotify")}>
        <img src="/doc-icons/spotify.svg" />
      </div>
      <div className="icon cli" onClick={() => handleClick("cli")}>
        <img src="/doc-icons/cli.svg" />
      </div>{" "}
      <div
        onClick={() => {
          window.open("mailto:bilalshaikj6@gmail.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/bilal-shaikh-9a1a45279/",
            "_blank",
          );
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
