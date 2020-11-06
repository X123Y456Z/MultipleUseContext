import React, { createContext, useState } from "react";

export const AppContext = createContext(null);
export const GlobalContext = createContext(null);

const initialState = {};
const initialGlobal = {
  formData: null,
  selectData: null
};

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialGlobal);
  return (
    <GlobalContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalContext.Provider>
  );
};
