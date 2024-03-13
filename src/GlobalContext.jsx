// GlobalContext.js
import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const updateTitle = (newTitle) => {
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle) => {
    setSubtitle(newSubtitle);
  };

  return (
    <GlobalContext.Provider
      value={{ title, subtitle, updateTitle, updateSubtitle }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
