import React from 'react';
import logo from './logo.svg';
import './styles.scss';
import Navbar from './components/Navbar';
import Players from './components/Players';
import { useDarkMode } from './hooks/DarkMode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
        <Navbar/>
        <Players/>
      </header>
    </div>
  );
}

export default App;
