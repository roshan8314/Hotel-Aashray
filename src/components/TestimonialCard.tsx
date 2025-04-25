import { Star } from 'lucide-react';
import { Review } from '../types';

interface TestimonialCardProps {
  review: Review;
}

const TestimonialCard = ({ review }: TestimonialCardProps) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16}
            className={i < review.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}
          />
        ))}
      </div>
      <p className="text-neutral-600 italic mb-4 flex-grow">"{review.comment}"</p>
      <div>
        <p className="font-medium text-neutral-800">{review.name}</p>
        <p className="text-sm text-neutral-500">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;