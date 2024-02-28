import React, { useState, createContext, useContext } from "react";

// Create a Context
const LoginContext = createContext(null);

// Create a Provider Component
export const LoginContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

// Hook to use the shared state
export const useLoginContext = () => useContext(LoginContext);
