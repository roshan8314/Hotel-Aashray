import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card p-6 hover:translate-y-[-5px] transition-transform">
      <div className="p-3 bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mb-5">
        <Icon className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default FeatureCard;