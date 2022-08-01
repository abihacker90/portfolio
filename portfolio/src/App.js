import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
