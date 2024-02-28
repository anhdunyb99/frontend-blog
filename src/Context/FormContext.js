import React, { useState, createContext, useContext } from "react";

// Create a Context
const FormContext = createContext(false);

// Create a Provider Component
export const FormContextProvider = ({ children }) => {
  const [isBlogPostFormVisible, setIsBlogPostFormVisible] = useState(false);

  const showBlogPostForm = () => setIsBlogPostFormVisible(true);
  const hideBlogPostForm = () => setIsBlogPostFormVisible(false);

  return (
    <FormContext.Provider
      value={{ isBlogPostFormVisible, showBlogPostForm, hideBlogPostForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Hook to use the shared state
export const useFormContext = () => useContext(FormContext);
