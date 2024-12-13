import { ProcessStep } from './ProcessStep';

const steps = [
  {
    title: 'Data Collection',
    description: 'We analyze your business data, including products, sales history, and customer preferences.'
  },
  {
    title: 'Automated Ad Campaigns',
    description: 'Our system launches personalized advertising campaigns through platforms like Google Ads and Meta Ads, targeting customers based on location, interests, and purchasing behavior.'
  },
  {
    title: 'Landing Page Creation',
    description: 'We build a sleek, conversion-focused landing page showcasing your products and capturing customer leads.'
  },
  {
    title: 'Performance Tracking',
    description: 'Receive real-time performance reports with metrics like clicks, conversions, and ROI through interactive dashboards.'
  }
];

export function ProcessSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">How It Works</h2>
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}