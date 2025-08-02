import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/food/hero-kabobs.jpg" 
          alt="Authentic Persian kabobs grilling with fresh tomatoes at Shish Kabob Cafe Katy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-bold text-5xl md:text-7xl mb-6 leading-tight">
          Authentic <span className="text-saffron">Persian</span><br />
          Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Serving the most delicious kabobs in Houston since 1994. Experience authentic, flavorful Persian cuisine using locally sourced halal ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-saffron text-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
          >
            View Our Menu
          </button>
          <button 
            onClick={() => scrollToSection('order')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-200"
          >
            Order Online
          </button>
        </div>
        
        {/* Persian text accent */}
        <div className="mt-8 text-saffron text-2xl font-light">
          حلال
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
