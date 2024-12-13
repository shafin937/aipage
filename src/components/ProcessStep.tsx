interface ProcessStepProps {
  title: string;
  description: string;
}

export function ProcessStep({ title, description }: ProcessStepProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}