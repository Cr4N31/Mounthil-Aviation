import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./shared/Footer";
import ScrollToHash from "./shared/ScrollToHash";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
