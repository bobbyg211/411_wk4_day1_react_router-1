import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./Router";
import "./App.css";
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
