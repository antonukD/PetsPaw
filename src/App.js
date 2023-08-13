import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Breeds from './components/pages/Breeds'
import Gallery from './components/pages/Gallery'
import Voiting from './components/pages/Voiting'
import NotFound from './components/pages/NotFound'
import MaineLayouts from './components/Layouts/MaineLayouts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App dark">
        <body className='bg-page-color dark:bg-[#1D1D1D] '>
        <Routes>
          <Route path="/" element={<MaineLayouts />}>
            <Route index element={<Home />} />
            <Route path="breeds" element={<Breeds />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="voiting" element={<Voiting />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes> 
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
