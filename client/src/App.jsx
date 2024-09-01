import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Projects } from './pages/Projects';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { FooterComp } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' elem ent={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
      <FooterComp/>
    </BrowserRouter>
  );
};

export default App;
