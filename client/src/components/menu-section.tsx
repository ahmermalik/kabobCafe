import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MenuItem } from "@shared/schema";
import { Button } from "@/components/ui/button";

const menuCategories = [
  { id: 'appetizers', name: 'Appetizers', emoji: '🍲' },
  { id: 'salads', name: 'Salads', emoji: '🥗' },
  { id: 'entrees', name: 'Entrées', emoji: '🍴' },
  { id: 'seafood', name: 'Seafood', emoji: '🐟' },
  { id: 'wraps', name: 'Gyro Wraps', emoji: '🌯' },
  { id: 'vegetarian', name: 'Vegetarian', emoji: '🥒' },
  { id: 'kids', name: "Kid's Menu", emoji: '🍟' },
  { id: 'sides', name: 'Fresh Sides', emoji: '🥗' },
  { id: 'desserts', name: 'Desserts', emoji: '🍪' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu', activeCategory],
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Our <span className="text-saffron">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, traditional recipes, and authentic flavors in every dish
          </p>
          <div className="mt-4 text-2xl text-persian">حلال</div>
        </div>

        {/* Menu Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all font-medium ${
                activeCategory === category.id
                  ? 'bg-saffron text-white'
                  : 'bg-gray-200 text-charcoal hover:bg-saffron hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-category">
          <h3 className="text-3xl font-bold text-charcoal mb-8 text-center">
            {menuCategories.find(cat => cat.id === activeCategory)?.name} {menuCategories.find(cat => cat.id === activeCategory)?.emoji}
          </h3>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-cream rounded-lg p-6 animate-pulse">
                  <div className="flex justify-between items-start mb-3">
                    <div className="h-6 bg-gray-200 rounded w-32"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems?.map((item) => (
                <div key={item.id} className="menu-card bg-cream rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-charcoal">{item.name}</h4>
                    <span className="text-lg font-bold text-pomegranate">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  {item.isVegetarian && (
                    <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Vegetarian
                    </span>
                  )}
                </div>
              ))}
              {(!menuItems || menuItems.length === 0) && !isLoading && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No items available in this category yet.</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
          >
            Contact Us for Orders
          </Button>
        </div>
      </div>
    </section>
  );
}
