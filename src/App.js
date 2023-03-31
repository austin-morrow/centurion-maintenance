import Navbar from './layouts/Navbar';
import Hero from './layouts/Hero';
import About from './layouts/About';
import Services from './layouts/Services';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';
import Work from './layouts/Work';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
