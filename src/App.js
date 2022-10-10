
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonies from './components/Testimonies/Testimonies';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Works/>
      <Portfolio/>
      <Testimonies/>
      <Contact />
      <Footer/> 
    </div>  
  );
}

export default App;
