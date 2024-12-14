import { ProcessStep } from './ProcessStep';

const steps = [
  {
    number: '01',
    title: 'Data Analysis',
    description: 'We analyze your business data to understand your unique needs and opportunities.'
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our AI creates a customized marketing strategy tailored to your goals.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We launch your campaigns with precision targeting and continuous optimization.'
  },
  {
    number: '04',
    title: 'Performance Tracking',
    description: 'Monitor results in real-time through our interactive dashboard.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}