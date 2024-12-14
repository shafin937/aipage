interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
      style={{ 
        animation: 'fadeIn 0.8s ease-out forwards',
        animationDelay: `${delay}ms`,
        opacity: 0
      }}
    >
      <div className="text-4xl mb-4 animate-float">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6 w-12 h-1 bg-blue-600 transform origin-left transition-all duration-300 group-hover:w-full" />
    </div>
  );
}