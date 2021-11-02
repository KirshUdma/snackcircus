import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Concession Equipment's, Ingredients and Accessories.
        </p>
        <a
          className="App-link"
          href="https://snackcircus.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit us @ snackcircus.com
        </a>
      </header>
    </div>
  );
}

export default App;