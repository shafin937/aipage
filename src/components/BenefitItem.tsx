interface BenefitItemProps {
  text: string;
}

export function BenefitItem({ text }: BenefitItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-green-500 text-xl">✅</span>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}