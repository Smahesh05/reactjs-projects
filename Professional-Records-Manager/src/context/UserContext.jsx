import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (user) => {
    setIsLoggedIn(true);
    setUserName(user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
