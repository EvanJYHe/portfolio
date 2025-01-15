import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

const App: React.FC = () => {

  return (
    <>
      <Navbar/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App
