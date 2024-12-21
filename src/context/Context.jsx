import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [submittedData, setSubmittedData] = useState([]);
    console.log(submittedData,"sssss")

  return (
    <Context.Provider value={{ submittedData, setSubmittedData}}>
      {children}
    </Context.Provider>
  );
};
