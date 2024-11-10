import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import './main.css';

import { servicesData } from './Data';

import './main';
function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects servicesData={servicesData} />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
