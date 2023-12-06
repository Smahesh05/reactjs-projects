import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import "./Header.css";

const Header = () => {
  const { logout } = useContext(UserContext);

  const username = localStorage.getItem("userName");

  return (
    <div className="header">
      <div>Logo</div>
      <ul>
        <li className="username">
          <a>{username}</a>
        </li>
        <li className="logout-btn">
          <Link to={"/login"} onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
