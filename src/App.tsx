import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Process } from './components/home/Process';
import { Contact } from './components/home/Contact';
import { Footer } from './components/layout/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;