import LOGO from "../assets/Spotify_Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <img className="navigation-logo" src={LOGO} alt="" />
    </div>
  );
};

export default Header;
