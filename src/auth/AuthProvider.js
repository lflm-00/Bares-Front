import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("loggedAppUser")) || null
  );


  const contextValue = {
    user,
    login() {
      setUser(user);
    },
    logout() {
      setUser("");
      window.localStorage.removeItem("loggedAppUser");
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
