import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 pb-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/about us suraj.jpg" 
            alt="About OYO Aashray" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
            <p className="text-lg text-white/90">
              Learn more about OYO Aashray and our commitment to providing exceptional hospitality in Katrasgarh, Jharkhand.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Welcome to OYO Aashray</h2>
              <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
              <p className="text-neutral-700 mb-6">
                OYO Aashray is a premier budget-friendly hotel located in the heart of Katrasgarh, Jharkhand. 
                Since our establishment, we have been dedicated to providing comfortable accommodation with modern amenities 
                at affordable prices to both business and leisure travelers.
              </p>
              <p className="text-neutral-700 mb-6">
                Our hotel features well-appointed rooms, each designed to provide maximum comfort and relaxation. 
                With amenities such as air conditioning, LED TVs, free WiFi, and clean attached bathrooms, 
                we ensure that your stay with us is as pleasant as possible.
              </p>
              <p className="text-neutral-700">
                At OYO Aashray, we believe in the philosophy of "Atithi Devo Bhava" (Guest is God). 
                Our dedicated staff is committed to providing exceptional service and ensuring that all your needs are met promptly. 
                We strive to make your stay memorable and look forward to welcoming you to our hotel.
              </p>
            </div>
            <div>
              <img 
                src="/img/front view 2.jpg" 
                alt="OYO Aashray Hotel Interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-700">
              Our mission at OYO Aashray is to provide a comfortable, safe, and affordable accommodation experience 
              to all our guests while maintaining high standards of cleanliness and service. We aim to be the preferred choice 
              for travelers visiting Katrasgarh by consistently exceeding their expectations and creating a home away from home.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Our Location</h2>
            <p>Strategically located in Katrasgarh for your convenience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p className="text-neutral-700">Katrasgarh, Dhanbad, Jharkhand – 828113, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <a href="tel:+7488173091" className="text-neutral-700 hover:text-primary-600 transition-colors">
                      +91 7488173091
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:aashrayinn@gmail.com" className="text-neutral-700 hover:text-primary-600 transition-colors">
                    aashrayinn@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h4 className="font-medium mb-2">Nearby Attractions:</h4>
                <ul className="list-disc list-inside space-y-1 text-neutral-700">
                  <li>Local Market (0.5 km)</li>
                  <li>Katrasgarh Railway Station (4 km)</li>
                  <li>City Center Mall (3 km)</li>
                  <li>Maithon Dam (15 km)</li>
                  <li>Parasnath Hills (45 km)</li>
                </ul>
              </div>
            </div>
            
            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14622.846856111426!2d86.3024!3d23.7965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678459%3A0x87286b83eb4b6671!2sKatras%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1653991234"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="OYO Aashray Hotel Location"
                aria-label="Map showing the location of OYO Aashray hotel in Katrasgarh, Jharkhand"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;