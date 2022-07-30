import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import About from './components/About/About';

function App() {
  return (
    <>
      <Nav />
      <Main />
     {/*  <Footer /> */}
     <About></About>
    </>
  );
}

export default App;
