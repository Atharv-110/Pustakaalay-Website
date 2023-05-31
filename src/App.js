import './App.css';
import Navbar from './components/js/utils/navbar';
import About from './components/js/main/about';
import Issues from './components/js/main/issues';
import Contact from './components/js/main/contact';
import Hero from './components/js/main/hero';
import Footer from './components/js/utils/footer';
// import FAQ from './components/js/main/faq';
import Services from './components/js/main/services';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Issues />
    <Services />
    {/* <FAQ /> */}
    <Contact />
    <Footer />
    </>
  );
}

export default App;
