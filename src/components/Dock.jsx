import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  const handleClick = (name) => {
    setWindowsState(prev => {
      const win = prev[name]
      const maxZ = Math.max(...Object.values(prev).map(w => w.z))

      if (!win.open)
        return { ...prev, [name]: { ...win, open: true, minimized: false, z: maxZ + 1 } }

      if (win.minimized)
        return { ...prev, [name]: { ...win, minimized: false, z: maxZ + 1 } }

      return { ...prev, [name]: { ...win, minimized: true } }
    })
  }

const DockIcon = ({ name, icon, className = "icon" }) => (
  <div className={`dock-item ${className}`} onClick={() => handleClick(name)}>
    <img src={icon} alt={name} />
    {windowsState[name]?.open && <span className="dot" />}
  </div>
);

  return (
    <footer className="dock">
      <DockIcon name="github" className='icon'  icon="/doc-icons/github.svg" />
      <DockIcon name="note" className='icon'   icon="/doc-icons/note.svg" />
      <DockIcon name="resume" className='icon' icon="/doc-icons/pdf.svg" />
      <DockIcon name="spotify" className='icon' icon="/doc-icons/spotify.svg" />
      <DockIcon name="cli" className='icon cli' icon="/doc-icons/cli.svg" />

      <div
        onClick={() =>
          window.open("mailto:bilalshaikj6@gmail.com", "_blank")
        }
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>

      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/bilal-shaikh-9a1a45279/",
            "_blank"
          )
        }
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
