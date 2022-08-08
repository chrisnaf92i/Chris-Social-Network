import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './layout/Header';
import HomePage from './Pages/HomePage';
import Loginpage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
    <main className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/acceuil" element={<HomePage/>}/>
        <Route path="/inscription" element={<SignInPage/>}/>
        <Route path="/connexion" element={<Loginpage/>}/>
      </Routes>

    </main>
  );
}

export default App;
