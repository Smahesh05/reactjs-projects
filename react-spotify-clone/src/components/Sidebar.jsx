import { FaHome, FaSearch } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import "./Sidebar.css";

const myPlayList = [
  { id: "1", name: "Hot Music" },
  { id: "2", name: "Chill Beats" },
  { id: "3", name: "Rock Classics" },
  { id: "4", name: "Pop Hits" },
  { id: "5", name: "R&B Vibes" },
  { id: "6", name: "Workout Mix" },
  { id: "7", name: "Study Playlist" },
  { id: "8", name: "Throwback Jams" },
  { id: "9", name: "Indie Showcase" },
  { id: "10", name: "EDM Party" },
];
const Sidebar = () => {
  return (
    <div className="side-bar-container">
      <div className="side-bar-items">
        <FaHome width={"18px"} strokeWidth={"2px"} />
        Home
      </div>
      <div className="side-bar-items">
        <FaSearch width={"18px"} strokeWidth={"2px"} />
        Search
      </div>
      <div className="side-bar-items">
        <IoBookSharp width={"18px"} strokeWidth={"2px"} />
        Library
      </div>

      <div className="sidebar-options">
        {myPlayList.map((item) => (
          <div className="side-bar-items" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
