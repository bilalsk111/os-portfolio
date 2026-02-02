import React from "react";
import Window from "./Window";
import "./Spotify.scss";

const Spotify = ({ state, setWindows }) => {
  return (
    <Window
      title="Spotify"
   state={state}
      setWindows={setWindows} width="25vw"
    >
      <div className="spotify-container">
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?theme=0"
          title="Spotify Player"
          className="spotify-frame"
          allow="encrypted-media"
        />
      </div>
    </Window>
  );
};

export default Spotify;
