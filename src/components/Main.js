import React from 'react';
import Home from './Home';
import About from './About';
import FAQ from './FAQ';

import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
    </main>
  )
}

export default Main