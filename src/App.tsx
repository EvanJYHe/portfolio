import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experiences from './sections/Experience';
import Project from './sections/Project';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Home/>
          <About/>
          <Experiences/>
          <Project/>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default App
