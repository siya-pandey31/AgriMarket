import React, { createContext, useState } from "react";

export const AuthContext = createContext(); // ✅ Ensure this is correctly exported

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Default: No user logged in

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};