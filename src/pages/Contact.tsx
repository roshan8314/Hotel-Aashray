import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative pt-32 pb-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
            <p className="text-lg text-white/90">
              Reach out to us for inquiries, bookings, or any assistance you may need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+91 7488173091" className="text-neutral-700 hover:text-primary-600 transition-colors">
                +91 7488173091
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:aashrayinn@gmail.com" className="text-neutral-700 hover:text-primary-600 transition-colors">
              aashrayinn@gmail.com
              </a>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-neutral-700">
                Katrasgarh, Dhanbad,<br />
                Jharkhand – 828113, India
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-neutral-700">
                24/7 Reception<br />
                Always Open
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Get In Touch</h2>
              <p className="text-neutral-700 mb-8">
                Have questions or need assistance? Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Location</h2>
              <p className="text-neutral-700 mb-8">
                OYO Aashray is conveniently located in Katrasgarh, Jharkhand. We're accessible from major transport hubs and nearby attractions.
              </p>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to commonly asked questions about our hotel and services</p>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-800">What are the check-in and check-out times?</h3>
                <p className="text-neutral-700">Check-in is at 12:00 PM (noon) and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-800">Is there parking available at the hotel?</h3>
                <p className="text-neutral-700">Yes, we offer complimentary parking for all our guests within the hotel premises.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-800">Do you provide airport/railway station transfers?</h3>
                <p className="text-neutral-700">Yes, we can arrange airport and railway station transfers at an additional cost. Please contact our reception in advance to book this service.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-800">Is WiFi available in the hotel?</h3>
                <p className="text-neutral-700">Yes, we provide complimentary high-speed WiFi access throughout the hotel for all our guests.</p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary-800">What is your cancellation policy?</h3>
                <p className="text-neutral-700">Cancellations made 24 hours prior to arrival are eligible for a full refund. For cancellations less than 24 hours before arrival or no-shows, a one-night charge will be applicable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;