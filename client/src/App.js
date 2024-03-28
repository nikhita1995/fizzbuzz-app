import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Toolbar from './Component/Toolbar';
import Dashboard from './Component/Dashboard';
import styles from './App.module.css';
import useToken from './Component/useToken';

const App = () => {
  const { token, removeToken, setToken } = useToken();
  return (
    <div className={styles.app_main_div}>
      <BrowserRouter>
        {!token && token !== "" && token !== undefined ?
          <Login setToken={setToken} /> :
          <>
            <Toolbar token={removeToken} />
            <Routes>
              <Route path='/' exact
                element={<Dashboard token={token} setToken={setToken} />}
              />
            </Routes>
          </>}

      </BrowserRouter>
    </div>
  )
}

export default App