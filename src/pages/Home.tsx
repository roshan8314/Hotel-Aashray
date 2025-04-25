import { Link } from 'react-router-dom';
import { Wifi, Clock, Car, Zap, UtensilsCrossed, Coffee } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { rooms } from '../data/rooms';
import RoomCard from '../components/RoomCard';
import { reviews } from '../data/reviews';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  // Featured rooms - show only 3 rooms on homepage
  const featuredRooms = rooms.slice(0, 3);
  
  // Featured testimonials - show only 3 testimonials on homepage
  const featuredTestimonials = reviews.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/frot view.png" 
            alt="OYO Aashray Hotel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Your Comfortable Stay in Katrasgarh
            </h1>
            <p className="text-xl text-white/80 mb-8 md:pr-12">
              Experience the perfect blend of comfort, convenience, and affordability at OYO Aashray, Jharkhand's premier budget-friendly accommodation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="https://www.oyorooms.com/296408/?checkin=24%2F04%2F2025&checkout=25%2F04%2F2025&rooms=1&guests=1&rooms_config=1-1_0&selected_rcid=1" className="btn btn-primary">
                Book Your Stay
              </Link>
              <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white/10">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose OYO Aashray</h2>
            <p>Experience the perfect stay with our top-notch facilities and services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Wifi} 
              title="Free WiFi" 
              description="Stay connected with high-speed internet access available throughout the hotel premises."
            />
            <FeatureCard 
              icon={Clock} 
              title="24/7 Support" 
              description="Our friendly staff is available round the clock to assist you with any requirements."
            />
            <FeatureCard 
              icon={Car} 
              title="Free Parking" 
              description="Convenient and secure parking space available for all our guests."
            />
            <FeatureCard 
              icon={Zap} 
              title="Power Backup" 
              description="Uninterrupted power supply ensures your comfort throughout your stay."
            />
            <FeatureCard 
              icon={UtensilsCrossed} 
              title="Room Service" 
              description="Enjoy delicious meals delivered right to your room at your convenience."
            />
            <FeatureCard 
              icon={Coffee} 
              title="Complimentary Breakfast" 
              description="Start your day right with our fresh and delicious breakfast offerings."
            />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Comfortable Rooms</h2>
            <p>Choose from our selection of well-appointed rooms designed for your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="btn btn-primary">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Guest Testimonials</h2>
            <p>Discover what our guests have to say about their experience with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredTestimonials.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews" className="btn btn-outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-lg text-primary-100 mb-8">
              Experience the perfect blend of comfort, convenience, and affordability at OYO Aashray. Book your stay today!
            </p>
            <Link to="https://www.oyorooms.com/296408/?checkin=24%2F04%2F2025&checkout=25%2F04%2F2025&rooms=1&guests=1&rooms_config=1-1_0&selected_rcid=1" className="btn btn-secondary">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;