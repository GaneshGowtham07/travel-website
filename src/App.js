import React from 'react';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services.js';
import Products from './Components/pages/Products.js';
import SignUp from './Components/pages/SignUp.js';


function App() {
  return (
    <>
    <Router>
    
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Products' element={<Products/>}/>
        <Route path='SignUp' element={<SignUp/>}/>

      
        
      </Routes>

      </Router>
    </>
    
  );
}

export default App;
