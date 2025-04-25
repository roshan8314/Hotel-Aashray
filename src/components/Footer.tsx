import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Bed } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bed className="h-8 w-8 text-secondary-400" />
              <span className="text-xl font-heading font-semibold">OYO Aashray</span>
            </div>
            <p className="text-neutral-300 mb-4">
              OYO Aashray offers comfortable and budget-friendly accommodation in Katrasgarh, Jharkhand with modern amenities and excellent service.
            </p>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-neutral-300 hover:text-white transition-colors">Rooms & Facilities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-neutral-300 hover:text-white transition-colors">Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-primary-700 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary-400 mt-1 shrink-0" />
                <span className="text-neutral-300">
                  Katrasgarh, Dhanbad, Jharkhand – 828113, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary-400 shrink-0" />
                <a href="tel:+91 97488173091" className="text-neutral-300 hover:text-white transition-colors">
                  +91 97488173091
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary-400 shrink-0" />
                <a href="mailto:info@oyoaashray.com" className="text-neutral-300 hover:text-white transition-colors">
                aashrayinn@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-300 text-sm text-center md:text-left">
              &copy; {currentYear} OYO Aashray. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;