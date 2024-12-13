import { Header } from './components/Header';
import { ServiceSection } from './components/ServiceSection';
import { ProcessSection } from './components/ProcessSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CallToAction } from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceSection />
        <ProcessSection />
        <BenefitsSection />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;