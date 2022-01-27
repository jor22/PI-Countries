import React from 'react';
import './App.css';
import {  BrowserRouter , Routes , Route  } from "react-router-dom";
import LandingPage from './components/Landing'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route  path="/"  element={<LandingPage/>}/>
          <Route path='/countries' element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
