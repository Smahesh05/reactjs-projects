import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
