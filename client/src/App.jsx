import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Home from './pages/Home';


export default function App() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
          </Routes>
         </BrowserRouter>
  
}

/*
1. if you see the return statement, I did not gave any brackets and placed <browser-router> 
right next to 'return word'.
Because, I don't know why? it was working like that only. If I place brackets, the it was not working.

*/