import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'AI-Powered Analytics',
    description: 'Deep insights into customer behavior and campaign performance.',
    icon: '📊'
  },
  {
    title: 'Smart Automation',
    description: 'Automated campaigns that optimize in real-time for maximum ROI.',
    icon: '⚡'
  },
  {
    title: 'Personalization',
    description: 'Tailored messaging that resonates with your target audience.',
    icon: '🎯'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}