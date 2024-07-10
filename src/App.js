import React from 'react';
import './App.css';
import './index.css'
import {Navbar} from './Navbar';
import {Footerdisplay} from './Footer';
import {Products} from './Products';
import Landingpage from './Landingpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Landingpage/>
      <Footerdisplay/>
      <Products/>

    </div>
  );
}

export default App;
