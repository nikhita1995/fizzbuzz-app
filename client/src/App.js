import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Toolbar from './Component/Toolbar';
import Dashboard from './Component/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
    <Login/>

    <Toolbar/>

    <Routes>
      <Route path='/' exact element={<Dashboard/>}></Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App