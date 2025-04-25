import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Bed, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Bed className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
          <span className={`text-xl font-heading font-semibold ${
            isScrolled ? 'text-primary-800' : 'text-white'
          }`}>
            OYO Aashray
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600') 
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600')  
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/rooms" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600')  
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            Rooms
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600')  
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/reviews" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600')  
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            Reviews
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isScrolled 
                  ? (isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600')  
                  : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
              }`
            }
          >
            Contact
          </NavLink>
          <Link to="https://www.oyorooms.com/296408/?checkin=24%2F04%2F2025&checkout=25%2F04%2F2025&rooms=1&guests=1&rooms_config=1-1_0&selected_rcid=1" className="btn btn-primary ml-2">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-7 w-7 ${isScrolled ? 'text-primary-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-7 w-7 ${isScrolled ? 'text-primary-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-24`}
      >
        <nav className="container flex flex-col gap-6 p-4">
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 flex items-center gap-2 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            <Home size={20} />
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/rooms" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            Rooms
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/reviews" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            Reviews
          </NavLink>
          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => 
              `text-lg font-medium py-2 border-b border-neutral-100 ${
                isActive ? 'text-primary-600' : 'text-neutral-800'
              }`
            }
          >
            Contact
          </NavLink>
          <Link 
            to="/rooms" 
            onClick={closeMenu}
            className="btn btn-primary mt-4"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;