import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Router, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';

const App = () => { 
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/products/" /> 
        <Route element={<Detail/>} path="/products/:id" />
      </Routes>
    </BrowserRouter>
    </div>
    ) 
}

export default App;
