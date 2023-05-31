import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/js/utils/loader"
import Navbar from "./components/js/utils/navbar";
import About from "./components/js/main/about";
import Issues from "./components/js/main/issues";
import Contact from "./components/js/main/contact";
import Hero from "./components/js/main/hero";
import Footer from "./components/js/utils/footer";
import FAQ from './components/js/main/faq';
import Services from "./components/js/main/services";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {
        loading ?
        <Loader />
        :
        <>
        <Navbar />
        <Hero />
        <About />
        <Issues />
        <Services />
        <FAQ />
        <Contact />
        <Footer />
        </>
      } 
    </>
  );
}

export default App;
