import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import "./Footer.css";

export default function Footer() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <div className="footer-container">
      <div className="player-controler">
        <TbPlayerTrackPrevFilled width={"32px"} />
        {isPlaying ? (
          <FaPause width={"32px"} onClick={() => setIsPlaying(false)} />
        ) : (
          <FaPlay width={"32px"} onClick={() => setIsPlaying(true)} />
        )}
        <TbPlayerTrackNextFilled width={"32px"} />
      </div>
    </div>
  );
}
