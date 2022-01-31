import React from 'react';
import './App.css';
import {  BrowserRouter , Routes , Route } from "react-router-dom";
import LandingPage from './components/Landing'
import Home from './components/Home'
import Detail from './components/Detail';
import Activity from './components/Activity';

function App() {
   

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route  path={"/"}  element={<LandingPage/>}/>
          <Route path={'/countries'} element={<Home/>}></Route>
          <Route path={'/countries/:id'}  element={<Detail/>}></Route>
          <Route path={'/activity'} element={<Activity/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
