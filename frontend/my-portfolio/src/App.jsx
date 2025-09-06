import React from 'react';
import './index.css'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Portfolio from './Portfolio'
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
