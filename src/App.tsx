import React from "react";
import { Header } from "./components/inc/Header";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
