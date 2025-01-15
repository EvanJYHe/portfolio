import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';

const App: React.FC = () => {

  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Home/>
          <About/>
        </main>
      </div>
    </>
  );
};

export default App
