import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
