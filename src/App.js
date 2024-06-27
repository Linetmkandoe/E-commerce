import React from 'react';
import './App.css';
import './index.css'
import Navbar from './Navbar';
import SearchBar from './Search';
import Land from './Landingpage';
import Footerdisplay from './Footer';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Land/>
      <Footerdisplay/>
      <Products/>

    </div>
  );
}

export default App;
