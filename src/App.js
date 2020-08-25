import React from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer/index.js';
import Directory from './components/Directory.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
