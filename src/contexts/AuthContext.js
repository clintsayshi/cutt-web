import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  value = {
    currentUser,
  };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
}
