import { useState } from 'react';
import { reviews as initialReviews } from '../data/reviews';
import TestimonialCard from '../components/TestimonialCard';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        rating: 5,
        comment: ''
      });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <>
      {/* Reviews Hero */}
      <section className="relative pt-32 pb-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="img/WhatsApp Image 2025-04-24 at 10.19.29 PM.jpeg" 
            alt="Guest Reviews" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Guest Reviews</h1>
            <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
            <p className="text-lg text-white/90">
              See what our guests have to say about their experience at OYO Aashray.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-neutral-50 p-8 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-800 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20}
                      className={i < Math.round(averageRating) ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}
                    />
                  ))}
                </div>
                <p className="text-neutral-600">Based on {reviews.length} reviews</p>
              </div>
              
              <div className="h-20 w-px bg-neutral-200 hidden md:block"></div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Rating Breakdown</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = reviews.filter(r => r.rating === rating).length;
                    const percentage = (count / reviews.length) * 100;
                    
                    return (
                      <div key={rating} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-24">
                          <span>{rating}</span>
                          <Star size={16} className="text-secondary-500 fill-secondary-500" />
                        </div>
                        <div className="flex-grow h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-secondary-500 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-12 text-right text-sm text-neutral-600">
                          {count}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Recent Reviews</h2>
            <p>Read what our guests say about their experience at OYO Aashray</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Submit Your Review</h2>
            <p>Share your experience and help us improve our services</p>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            {submitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="bg-success-50 text-success-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Thank You for Your Review!</h3>
                  <p>Your feedback has been successfully submitted and will help other travelers make informed decisions.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Suraj Kumar"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="suraj@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="form-label">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingChange(rating)}
                        className="focus:outline-none"
                        aria-label={`Rate ${rating} stars`}
                      >
                        <Star 
                          size={32} 
                          className={`${
                            rating <= formData.rating 
                              ? 'text-secondary-500 fill-secondary-500' 
                              : 'text-neutral-300'
                          } hover:text-secondary-400 transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="comment" className="form-label">Your Review</label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={5}
                    className="form-input"
                    placeholder="Share your experience at OYO Aashray..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                      <span className="ml-2">Submitting...</span>
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;