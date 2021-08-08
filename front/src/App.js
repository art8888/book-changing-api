import React from "react";

import "@fontsource/roboto";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <React.Fragment>
        <Header />
        <Main />
    </React.Fragment>
  );
}

export default App;
