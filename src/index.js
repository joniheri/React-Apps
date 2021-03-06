import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// import context
import { AppContextProvider } from "./contexts/GlobalContext";

// import App from "./App";
import AppProject from "./AppProject";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppContextProvider>
      <AppProject />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
