interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="group hover:bg-blue-50 p-8 rounded-lg transition-colors duration-300">
      <div className="text-5xl font-bold text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
        {number}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-4 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}