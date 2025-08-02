export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Shish Kabob <span className="text-saffron">Cafe</span>
            </h3>
            <p className="text-gray-200 mb-4">
              Serving authentic Persian and Mediterranean cuisine in Katy, Texas since 1994. 
              Experience the taste of tradition with fresh, halal ingredients.
            </p>
            <div className="text-persian text-xl">حلال</div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-200 hover:text-saffron transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('menu')} className="text-gray-200 hover:text-saffron transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-saffron transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-saffron transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-saffron">Contact Info</h4>
            <div className="space-y-2 text-gray-200">
              <p>Katy, TX 77094</p>
              <p>(281) XXX-XXXX</p>
              <p>Mon-Sat: 11:00 AM - 9:30 PM</p>
              <p className="text-pomegranate">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2024 Shish Kabob Cafe Katy. All rights reserved. Proudly serving the Houston community since 1994.</p>
        </div>
      </div>
    </footer>
  );
}
