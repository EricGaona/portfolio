import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import ContactManual from "./components/ContactManual";
import ContactLib from "./components/ContactLib";
import { Footer } from "./components/Footer";
import Example from "./components/Example";
import { useState, useEffect, createRef } from "react";

function App() {
  const scrollToElement = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace que el desplazamiento sea suave
    });
  };

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#hero");
      const distance = element.getBoundingClientRect().top + 500;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollY > distance) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el oyente de eventos cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrowStyle = {
    display: showArrow ? "block" : "none",
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <About />
        <Works />
        {/* <Contact /> */}
        <ContactLib />
      </div>
      <Footer />
      <div className="fixed bottom-0 right-0">
        <button
          className="text-black absolute right-3 bottom-24 bg-blue-200 p-3 rounded-full hover:bg-blue-400 border-black border"
          onClick={scrollToElement}
          style={arrowStyle}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
