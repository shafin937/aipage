import { BenefitItem } from './BenefitItem';

const benefits = [
  { text: 'Fast Setup: Launch campaigns quickly with minimal setup.' },
  { text: 'Cost-Effective: Pay only for results-driven campaigns.' },
  { text: 'Data-Driven Results: Make decisions based on clear, actionable insights.' },
  { text: 'Customer Growth: See a tangible increase in customer engagement and sales.' }
];

export function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Why Choose Us?</h2>
        <div className="grid gap-4">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} text={benefit.text} />
          ))}
        </div>
      </div>
    </section>
  );
}