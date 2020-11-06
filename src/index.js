import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider, GlobalContextProvider } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </GlobalContextProvider>,
  rootElement
);
