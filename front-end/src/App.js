import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';  // Navbar 컴포넌트를 임포트합니다.
import Loginpage from './components/mypage/Loginpage.js';
import Signuppage from './components/mypage/Signuppage.js';

function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the main page!</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
