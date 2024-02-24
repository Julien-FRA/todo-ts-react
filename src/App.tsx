import React from "react";
import { Header } from "./components/inc/Header";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
