import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from '../src/layouts/Footer';
import Navbar from './layouts/Navbar';
//  Pages
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import WoodMilling from './pages/WoodMilling';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <BrowserRouter>
       <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='woodmilling' element={<WoodMilling />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
