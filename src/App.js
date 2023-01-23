import {BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './layouts/Navbar';
//  Pages
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <header>
       <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
