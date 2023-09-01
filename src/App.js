import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
