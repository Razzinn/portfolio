import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <div className="App">
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
