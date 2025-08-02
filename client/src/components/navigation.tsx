import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-charcoal">
              Shish Kabob <span className="text-saffron">Cafe</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-charcoal hover:text-saffron transition-colors duration-200 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-charcoal hover:text-saffron transition-colors duration-200 font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('about')} className="text-charcoal hover:text-saffron transition-colors duration-200 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-saffron transition-colors duration-200 font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-charcoal hover:text-saffron"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-charcoal hover:text-saffron w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('menu')} className="block px-3 py-2 text-charcoal hover:text-saffron w-full text-left">
                Menu
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-charcoal hover:text-saffron w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-charcoal hover:text-saffron w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
