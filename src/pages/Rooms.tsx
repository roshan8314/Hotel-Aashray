import { rooms } from '../data/rooms';
import RoomCard from '../components/RoomCard';
import { CheckCircle } from 'lucide-react';

const Rooms = () => {
  return (
    <>
      {/* Rooms Hero */}
      <section className="relative pt-32 pb-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Hotel Rooms" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms & Facilities</h1>
            <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
            <p className="text-lg text-white/90">
              Discover our comfortable accommodations designed for a relaxing and enjoyable stay.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Accommodations for Every Need</h2>
            <p>Choose from our selection of well-appointed rooms designed for your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* General Amenities */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="section-title">
            <h2>Hotel Amenities</h2>
            <p>Enjoy a range of facilities designed to enhance your stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-12 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">24/7 Front Desk</h3>
                <p className="text-neutral-600">Our reception is available round the clock for your convenience.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Free High-Speed WiFi</h3>
                <p className="text-neutral-600">Stay connected with complimentary internet throughout the hotel.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Power Backup</h3>
                <p className="text-neutral-600">Enjoy uninterrupted power supply throughout your stay.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Daily Housekeeping</h3>
                <p className="text-neutral-600">We maintain high standards of cleanliness with daily room service.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Secure Parking</h3>
                <p className="text-neutral-600">Complimentary parking space available for all our guests.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Room Service</h3>
                <p className="text-neutral-600">Enjoy meals and beverages delivered to your room.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-success-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg">Laundry Service</h3>
                <p className="text-neutral-600">Convenient laundry facilities available for guests.</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Hotel Policies</h2>
            <p>Important information for your stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Check-in & Check-out</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="font-medium">Check-in Time:</span>
                  <span>12:00 PM (Noon)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Check-out Time:</span>
                  <span>11:00 AM</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Early Check-in:</span>
                  <span>Subject to availability</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Late Check-out:</span>
                  <span>Additional charges may apply</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-800">Reservation & Cancellation</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="font-medium">Advance Booking:</span>
                  <span>Recommended for guaranteed availability</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Cancellation Policy:</span>
                  <span>24 hours prior to arrival for full refund</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">No-show:</span>
                  <span>One night charge applicable</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Payment Methods:</span>
                  <span>Cash, major credit/debit cards, UPI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;