import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Experiences from './sections/Experience';

const App: React.FC = () => {

  return (
    <>
      <div>
        <Navbar/>
        <main className="mt-16">
          <Home/>
          <About/>
          <Experiences/>
        </main>
      </div>
    </>
  );
};

export default App
